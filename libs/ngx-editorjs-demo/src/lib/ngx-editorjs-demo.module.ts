import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatExpansionModule, MatGridListModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { NgxEditorJSModule, UserPlugins } from '@tinynodes/ngx-editorjs';
import {
  PluginCodeModule,
  PluginHeaderModule,
  PluginLinkModule,
  PluginListModule,
  PluginMarkerModule,
  PluginParagraphModule,
  PluginSimpleImageModule
} from '@tinynodes/ngx-editorjs-plugins';
import { NgxTinynodesCoreModule } from '@tinynodes/ngx-tinynodes-core';
import { MaterialModule } from 'apps/ngx-tinynodes/src/app/material.module';
import { MarkdownModule } from 'ngx-markdown';
import { createNgxEditorJSDemoTools } from './config';
import { PageContainerComponent } from './containers/page-container/page-container.component';
import { ngxEditorjsDemoRoutes } from './ngx-editorjs-demo.routes';
import { PageStoreModule } from './store/pages/pages.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ngxEditorjsDemoRoutes),
    MarkdownModule.forChild(),
    ReactiveFormsModule,
    PageStoreModule,
    NgxEditorJSModule,
    PluginHeaderModule,
    PluginParagraphModule,
    PluginListModule,
    PluginCodeModule,
    PluginSimpleImageModule,
    PluginLinkModule,
    PluginMarkerModule,
    MaterialModule,
    MatCardModule,
    MatButtonModule,
    NgxTinynodesCoreModule,
    MatGridListModule,
    MatExpansionModule
  ],
  providers: [
    {
      provide: UserPlugins,
      useFactory: createNgxEditorJSDemoTools
    }
  ],
  declarations: [PageContainerComponent],
  exports: [PageStoreModule, PageContainerComponent],
  entryComponents: [PageContainerComponent]
})
export class NgxEditorjsDemoModule {}
