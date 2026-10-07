import { ChangeDetectionStrategy, Component } from '@angular/core';
import { perfil } from '../../data/curriculo.data';
import { isPlaceholder } from '../../utils/contato';
@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  readonly perfil = perfil;
  readonly emPersonalizacao = isPlaceholder(perfil.nome);
  readonly avatarAlt =
    perfil.avatarUrl === 'avatar.svg'
      ? 'Avatar ilustrativo temporário; substituir pela sua foto'
      : 'Foto de ' + perfil.nome;
}
