import { 
  AfterViewInit,
  Component, 
  ElementRef, 
  Input, 
  OnInit, 
  Renderer2, 
  ViewChild 
} from '@angular/core';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit, AfterViewInit{

  @Input() title!: string;
  @Input() body!: string;

  @ViewChild('truncator', { static: true}) truncator!: ElementRef<HTMLElement>;
  @ViewChild('bodyText', { static: true}) bodyText!: ElementRef<HTMLElement>;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {   
  }

  ngAfterViewInit(): void {
    let style = window.getComputedStyle(this.bodyText.nativeElement, null);
    let viewableHeight = parseInt(style.getPropertyValue("height"), 10);

    if (this.bodyText.nativeElement.scrollHeight > viewableHeight) {
      this.renderer.setStyle(this.truncator.nativeElement, 'display', 'block');
    } else {
      this.renderer.setStyle(this.truncator.nativeElement, 'display', 'none');
    } 
  }

}
function Import() {
  throw new Error('Function not implemented.');
}

