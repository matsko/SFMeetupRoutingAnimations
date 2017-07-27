import { Directive, ViewContainerRef, EmbeddedViewRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[ngSwap]'
})
export class SwapDirective {
  private _condition: any;
  private _viewRef: EmbeddedViewRef<any>;

  constructor(private _viewContainer: ViewContainerRef, private _templateRef: TemplateRef<any>) {}

  @Input()
  set ngSwap(condition: any) {
    if (!this._condition || condition !== this._condition) {
      this._updateView();
      this._condition = condition;
    }
  }

  private _updateView() {
    this._viewContainer.clear();
    this._viewRef = this._viewContainer.createEmbeddedView(this._templateRef);
  }
}
