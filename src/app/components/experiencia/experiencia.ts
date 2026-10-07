import { ChangeDetectionStrategy, Component } from '@angular/core';
import { experiencias } from '../../data/curriculo.data';
@Component({
  selector: 'app-experiencia',
  standalone: true,
  templateUrl: './experiencia.html',
  styleUrl: './experiencia.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Experiencia {
  readonly experiencias = experiencias;
  readonly tipos = { formacao: 'Formação', trabalho: 'Experiência', hackathon: 'Hackathon' };
}
