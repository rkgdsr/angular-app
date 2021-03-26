import {Component, ComponentFactoryResolver, OnInit, ViewChild} from '@angular/core';
import {DynamicComponentService, DynamicItem, DynamicComponent as DC } from './dynamic-component.service';
import {DynamicDirective} from './dynamic.directive';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {

  components: DynamicItem[] = [];

  @ViewChild(DynamicDirective, { static: true }) dynamic: DynamicDirective;

  constructor(
    private dynamicService: DynamicComponentService,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
    this.components = dynamicService.buildDynamicList();
  }

  ngOnInit(): void {
    this.loadComponent();
  }

  loadComponent(): void {
    const item = this.components[0];
    const comp = this.componentFactoryResolver.resolveComponentFactory(
      item.component
    );

    const view = this.dynamic.viewContainerRef;
    view.clear();

    const compR = view.createComponent<DC>(comp);
    compR.instance.data = item.data;
  }

}
