import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: ECommerceComponent,
    },
    {
      path: 'iot-dashboard',
      component: DashboardComponent,
    },
    {
      path: 'layout',
      loadChildren: () => import('./layout/layout.module')
        .then(m => m.LayoutModule),
    },
    {
      path: 'forms',
      loadChildren: () => import('./forms/forms.module')
        .then(m => m.FormsModule),
    },
    {
      path: 'ui-features',
      loadChildren: () => import('./ui-features/ui-features.module')
        .then(m => m.UiFeaturesModule),
    },
    {
      path: 'modal-overlays',
      loadChildren: () => import('./modal-overlays/modal-overlays.module')
        .then(m => m.ModalOverlaysModule),
    },
    {
      path: 'extra-components',
      loadChildren: () => import('./extra-components/extra-components.module')
        .then(m => m.ExtraComponentsModule),
    },
    {
      path: 'maps',
      loadChildren: () => import('./maps/maps.module')
        .then(m => m.MapsModule),
    },
    {
      path: 'charts',
      loadChildren: () => import('./charts/charts.module')
        .then(m => m.ChartsModule),
    },
    {
      path: 'editors',
      loadChildren: () => import('./editors/editors.module')
        .then(m => m.EditorsModule),
    },
    {
      path: 'tables',
      loadChildren: () => import('./tables/tables.module')
        .then(m => m.TablesModule),
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: 'bon-service',
      loadChildren: () => import('./model/bon-service/bon-service.module').then(m => m.BonServiceModule)
    },
    {
      path: 'client-morale',
      loadChildren: () => import('./model/client-morale/client-morale.module').then(m => m.ClientMoraleModule)
    },
    {
      path: 'client-physique',
      loadChildren: () => import('./model/client-physique/client-physique.module').then(m => m.ClientPhysiqueModule)
    },
    {
      path: 'commande-fournisseur',
      loadChildren: () => import('./model/commande-fournisseur/commande-fournisseur.module').then(m => m.CommandeFournisseurModule)
    },
    {
      path: 'devis',
      loadChildren: () => import('./model/devis/devis.module').then(m => m.DevisModule)
    },
    {
      path: 'facture-client',
      loadChildren: () => import('./model/facture-client/facture-client.module').then(m => m.FactureClientModule)
    },
    {
      path: 'facture-fournisseur',
      loadChildren: () => import('./model/facture-fournisseur/facture-fournisseur.module').then(m => m.FactureFournisseurModule)
    },
    {
      path: 'produit-fournisseur',
      loadChildren: () => import('./model/produit-fournisseur/produit-fournisseur.module').then(m => m.ProduitFournisseurModule)
    },
    {
      path: 'produit-client',
      loadChildren: () => import('./model/produit-client/produit-client.module').then(m => m.ProduitClientModule)
    },
    {
      path: 'regelement-fournisseur',
      loadChildren: () => import('./model/reglement-fournisseur/reglement-fournisseur.module').then(m => m.ReglementFournisseurModule)
    },
    {
      path: 'regelement-client',
      loadChildren: () => import('./model/reglement-client/reglement-client.module').then(m => m.ReglementClientModule)
    },
    {
      path: 'regelement-ht',
      loadChildren: () => import('./model/reglement-ht/reglement-ht.module').then(m => m.ReglementHTModule)
    },

    {
      path: 'fournisseur',
      loadChildren: () => import('./model/fournisseur/fournisseur.module').then(m => m.FournisseurModule)
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },


  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
