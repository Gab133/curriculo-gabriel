import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { Skills } from './components/skills/skills';
import { Experiencia } from './components/experiencia/experiencia';
import { Projetos } from './components/projetos/projetos';
import { Contato } from './components/contato/contato';
import { perfil } from './data/curriculo.data';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Hero, Skills, Experiencia, Projetos, Contato],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  readonly ano = new Date().getFullYear();
  readonly nome = perfil.nome;
  constructor() {
    const title = `Currículo Digital — ${perfil.nome} | ${perfil.cargo}`;
    const description = `Conheça a trajetória, habilidades e projetos de ${perfil.nome}. ${perfil.bio}`;
    inject(Title).setTitle(title);
    const meta = inject(Meta);
    meta.updateTag({ name: 'description', content: description });
    meta.updateTag({ property: 'og:title', content: title });
    meta.updateTag({ property: 'og:description', content: description });
  }
}
