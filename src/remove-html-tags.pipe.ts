// src/app/remove-html-tags.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'removeHtmlTags',
})
export class RemoveHtmlTagsPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(value: string): string {
    // Use DomSanitizer to sanitize HTML content and then strip HTML tags
    const sanitized: SafeHtml = this.sanitizer.bypassSecurityTrustHtml(value);
    const htmlString: string = sanitized ? (sanitized as any).changingThisBreaksApplicationSecurity : '';
    return htmlString.replace(/<[^>]*>/g, '');
  }
}
