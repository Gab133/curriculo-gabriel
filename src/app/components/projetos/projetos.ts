import { ChangeDetectionStrategy, Component } from '@angular/core';
import { projetos } from '../../data/curriculo.data';
import { externalUrl } from '../../utils/contato';
@Component({
  selector: 'app-projetos',
  standalone: true,
  templateUrl: './projetos.html',
  styleUrl: './projetos.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projetos {
  readonly projetos = projetos;
  readonly externalUrl = externalUrl;
}
