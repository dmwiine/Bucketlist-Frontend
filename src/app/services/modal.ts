import { ElementRef } from '@angular/core/core';

export function closeModal(closeBtn: ElementRef): void {
    closeBtn.nativeElement.click();
}
