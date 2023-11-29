// src/app/remove-html-tags.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'removeHtmlTags',
})
export class RemoveHtmlTagsPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(value: string): string {
    // Use DomSanitizer to sanitize HTML content and then strip HTML tags
    const sanitized: SafeHtml = this.sanitizer.bypassSecurityTrustHtml(value);
    const htmlString: string = sanitized ? (sanitized as any).changingThisBreaksApplicationSecurity : '';

    // Use a DOM parser to convert HTML to a DOM object
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    // Traverse the DOM and concatenate text content of each node
    const plainText = Array.from(doc.body.childNodes)
      .map(node => node.textContent || '')
      .join('');

    // Remove hashtags (assuming hashtags start with #)
    const plainTextWithoutHashtags = plainText.replace(/#(\w+)/g, '');
    return plainTextWithoutHashtags;
  }
}
