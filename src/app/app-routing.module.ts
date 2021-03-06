import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';
import { SetupComponent } from './setup/setup.component';
import { MarketComponent } from './market/market.component';

import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'help', component: HelpComponent },
    { path: 'setup', component: SetupComponent },
    { path: 'market', component: MarketComponent },
    { path: 'team', loadChildren: './team/team.module#TeamModule', canLoad: [AuthGuard] },
    { path: 'session', loadChildren: './session/session.module#SessionModule', canLoad: [AuthGuard] },
    { path: 'friend', loadChildren: './friend/friend.module#FriendModule', canLoad: [AuthGuard] },
    { path: 'account', loadChildren: './account/account.module#AccountModule', canLoad: [AuthGuard] },
    { path: 'project', loadChildren: './project/project.module#ProjectModule', canLoad: [AuthGuard] },
    { path: 'skill', loadChildren: './skill/skill.module#SkillModule', canLoad: [AuthGuard] },
    { path: 'venture', loadChildren: './venture/venture.module#VentureModule', canLoad: [AuthGuard] }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class AppRoutingModule {}