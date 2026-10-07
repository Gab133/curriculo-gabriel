import { TestBed } from '@angular/core/testing';
import { vi } from 'vitest';
import { App } from './app';
import { Skills } from './components/skills/skills';
import { Contato } from './components/contato/contato';
import { Header } from './components/header/header';
import { emailUrl, externalUrl, whatsappUrl } from './utils/contato';

describe('Currículo integrado', () => {
  it('compõe as seções sem links de placeholder ativos', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelectorAll('h1').length).toBe(1);
    for (const id of ['sobre', 'habilidades', 'trajetoria', 'projetos', 'contato'])
      expect(el.querySelector('#' + id)).toBeTruthy();
    expect(el.querySelectorAll('a[href*="["]').length).toBe(0);
    expect((el.querySelector('.contact__email button') as HTMLButtonElement).disabled).toBe(false);
    expect(el.querySelector('h1')?.textContent).toContain('GABRIEL BRAGA');
  });
});
describe('Skills reativas', () => {
  it('combina categoria e busca, normaliza acentos e restaura a lista', async () => {
    const fixture = TestBed.createComponent(Skills);
    const component = fixture.componentInstance;
    component.skills.set([
      { id: 'a', nome: 'Angular', categoria: 'Frontend', descricao: 'Interface', nivel: 65 },
      {
        id: 'b',
        nome: 'Comunicação',
        categoria: 'Soft Skills',
        descricao: 'Colaboração',
        nivel: null,
      },
    ]);
    component.busca.set('comunicacao');
    expect(component.skillsFiltradas().map((s) => s.id)).toEqual(['b']);
    component.setFiltro('Frontend');
    await fixture.whenStable();
    expect(fixture.nativeElement.textContent).toContain('Nenhuma habilidade encontrada');
    (fixture.nativeElement.querySelector('.skills__empty button') as HTMLButtonElement).click();
    await fixture.whenStable();
    expect(component.skillsFiltradas().length).toBe(2);
    expect(
      fixture.nativeElement.querySelector('[role="progressbar"]').getAttribute('aria-valuenow'),
    ).toBe('65');
  });
  it('filtra pelo botão e indica o estado acessível', async () => {
    const fixture = TestBed.createComponent(Skills);
    await fixture.whenStable();
    const buttons = Array.from(
      fixture.nativeElement.querySelectorAll('.skills__filters button'),
    ) as HTMLButtonElement[];
    const backend = buttons.find((b) => b.textContent?.trim() === 'Backend / Programação')!;
    backend.click();
    await fixture.whenStable();
    expect(backend.getAttribute('aria-pressed')).toBe('true');
    expect(fixture.nativeElement.querySelectorAll('.skills__card').length).toBe(5);
    expect(
      fixture.componentInstance.skillsFiltradas().every((s) => s.categoria === 'Backend'),
    ).toBe(true);
  });
  it('limita percentuais à faixa 0–100', () => {
    const component = TestBed.createComponent(Skills).componentInstance;
    const skill = {
      id: 'x',
      nome: 'Teste',
      categoria: 'Frontend' as const,
      descricao: '',
      nivel: 150,
    };
    expect(component.nivel(skill)).toBe(100);
    expect(component.nivel({ ...skill, nivel: -5 })).toBe(0);
  });
});
describe('Destinos de contato', () => {
  it('recusa placeholders, protocolos executáveis e e-mails inválidos', () => {
    expect(externalUrl('[URL DO PROJETO 1]')).toBeNull();
    expect(externalUrl('javascript:alert(1)')).toBeNull();
    expect(externalUrl('https://example.com')).toBe('https://example.com/');
    expect(emailUrl('[SEU EMAIL]')).toBeNull();
    expect(emailUrl('invalido')).toBeNull();
    expect(emailUrl('teste@example.com')).toContain('mailto:');
    expect(whatsappUrl('[SEU WHATSAPP COM DDI]')).toBeNull();
    expect(whatsappUrl('+55 (11) 99999-9999')).toBe('https://wa.me/5511999999999');
  });
  it('copia um endereço válido e recupera o estado após 2 segundos', async () => {
    vi.useFakeTimers();
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, 'clipboard', { configurable: true, value: { writeText } });
    const fixture = TestBed.createComponent(Contato);
    const component = fixture.componentInstance;
    Object.defineProperty(component, 'perfil', {
      value: { ...component.perfil, email: 'teste@example.com' },
    });
    Object.defineProperty(component, 'emailHref', { value: 'mailto:teste@example.com' });
    await component.copiarEmail();
    expect(writeText).toHaveBeenCalledWith(component.perfil.email);
    expect(component.estado()).toBe('copied');
    vi.advanceTimersByTime(2000);
    expect(component.estado()).toBe('idle');
    fixture.destroy();
    vi.useRealTimers();
  });
  it('mostra erro quando a área de transferência falha', async () => {
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: { writeText: vi.fn().mockRejectedValue(new Error('Denied')) },
    });
    const fixture = TestBed.createComponent(Contato);
    Object.defineProperty(fixture.componentInstance, 'emailHref', {
      value: 'mailto:teste@example.com',
    });
    await fixture.componentInstance.copiarEmail();
    expect(fixture.componentInstance.estado()).toBe('error');
    fixture.destroy();
  });
});
describe('Tema e menu', () => {
  it('alterna tema, persiste a preferência e fecha o menu', () => {
    const fixture = TestBed.createComponent(Header);
    const component = fixture.componentInstance;
    const previous = component.dark();
    component.toggleTheme();
    expect(component.dark()).toBe(!previous);
    expect(document.documentElement.dataset['theme']).toBe(previous ? 'light' : 'dark');
    expect(localStorage.getItem('curriculo-theme')).toBe(previous ? 'light' : 'dark');
    component.toggleMenu();
    expect(component.menuAberto()).toBe(true);
    component.fecharMenu();
    expect(component.menuAberto()).toBe(false);
  });
});
