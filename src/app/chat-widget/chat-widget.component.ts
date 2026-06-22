import { Component, ElementRef, Renderer2, OnInit } from '@angular/core';

@Component({
  selector: 'custom-chat-widget',
  standalone: true,
  imports: [],
  templateUrl: './chat-widget.component.html',
  styleUrl: './chat-widget.component.scss'
})
export class ChatWidgetComponent implements OnInit {

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    this.loadScript('https://rochester.libanswers.com/load_chat.php?hash=408099b31dd654fe41337006db267237155d23062a028186b1471e6d4c9a3ac1');
  }

  
  loadScript(src: string): void {
    const script = this.renderer.createElement('script');
    script.src = src;
    script.type = 'text/javascript';
    script.async = true;
    this.renderer.appendChild(this.el.nativeElement, script);
  }


}

