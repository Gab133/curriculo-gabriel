import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  private readonly document = inject(DOCUMENT);
  readonly dark = signal(this.document.documentElement.dataset['theme'] === 'dark');
  readonly menuAberto = signal(false);
  toggleTheme(): void {
    this.dark.update((value) => !value);
    const theme = this.dark() ? 'dark' : 'light';
    this.document.documentElement.dataset['theme'] = theme;
    this.document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', this.dark() ? '#111914' : '#f3f4ee');
    try {
      localStorage.setItem('curriculo-theme', theme);
    } catch {
      /* Tema continua funcionando sem armazenamento. */
    }
  }
  toggleMenu(): void {
    this.menuAberto.update((value) => !value);
  }
  fecharMenu(): void {
    this.menuAberto.set(false);
  }
}
