import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { skills } from '../../data/curriculo.data';
import { FiltroSkill, Skill } from '../../models/curriculo';
import { isPlaceholder } from '../../utils/contato';
@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Skills {
  readonly skills = signal<Skill[]>(skills);
  readonly filtroAtivo = signal<FiltroSkill>('Todos');
  readonly busca = signal('');
  readonly categorias = computed<FiltroSkill[]>(() => [
    'Todos',
    ...new Set(this.skills().map((s) => s.categoria)),
  ]);
  readonly emPersonalizacao = computed(() => this.skills().some((s) => isPlaceholder(s.nome)));
  readonly skillsFiltradas = computed(() =>
    this.skills().filter(
      (s) =>
        (this.filtroAtivo() === 'Todos' || s.categoria === this.filtroAtivo()) &&
        this.normalize(s.nome + ' ' + s.descricao).includes(this.normalize(this.busca())),
    ),
  );
  setFiltro(categoria: FiltroSkill): void {
    this.filtroAtivo.set(categoria);
  }
  setBusca(event: Event): void {
    this.busca.set((event.target as HTMLInputElement).value);
  }
  limpar(): void {
    this.filtroAtivo.set('Todos');
    this.busca.set('');
  }
  nivel(skill: Skill): number {
    return Math.min(100, Math.max(0, skill.nivel ?? 0));
  }
  private normalize(value: string): string {
    return value
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .trim();
  }
}
