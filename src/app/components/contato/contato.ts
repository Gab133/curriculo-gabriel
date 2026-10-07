import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { perfil } from '../../data/curriculo.data';
import { emailUrl, externalUrl, whatsappUrl } from '../../utils/contato';
@Component({
  selector: 'app-contato',
  standalone: true,
  templateUrl: './contato.html',
  styleUrl: './contato.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contato {
  readonly perfil = perfil;
  readonly emailHref = emailUrl(perfil.email);
  readonly links = [
    { nome: 'GitHub', valor: perfil.github, url: externalUrl(perfil.github), simbolo: 'GH' },
    { nome: 'LinkedIn', valor: perfil.linkedin, url: externalUrl(perfil.linkedin), simbolo: 'in' },
    { nome: 'WhatsApp', valor: perfil.whatsapp, url: whatsappUrl(perfil.whatsapp), simbolo: '↗' },
  ];
  readonly estado = signal<'idle' | 'copying' | 'copied' | 'error'>('idle');
  private timer?: ReturnType<typeof setTimeout>;
  constructor() {
    inject(DestroyRef).onDestroy(() => clearTimeout(this.timer));
  }
  async copiarEmail(): Promise<void> {
    if (!this.emailHref || this.estado() === 'copying') return;
    clearTimeout(this.timer);
    this.estado.set('copying');
    try {
      await navigator.clipboard.writeText(this.perfil.email);
      this.estado.set('copied');
    } catch {
      this.estado.set('error');
    }
    this.timer = setTimeout(() => this.estado.set('idle'), 2000);
  }
}
