import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: `
  

<div class="navbar-fixed">
  <nav class="nav-extended">
  <div class="progress">
      <div class="indeterminate"></div>
  </div>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Logo</a>
      <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
         <li><a routerLink="/">Home</a></li>
       <li><a routerLink="/lazy">Lazy</a></li>
       <li><a routerLink="/lazy/nested">Lazy_Nested</a></li>
        <li><a class="dropdown-button" href="#" data-activates="dropdown1">Dropdown<i class="material-icons right">arrow_drop_down</i></a>       
          <ul id="dropdown1" class="dropdown-content">
            <li><a href="#!">one</a></li>
            <li><a href="#!">two</a></li>
            <li class="divider"></li>
            <li><a href="#!">three</a></li>
          </ul>
       </li>
      </ul>
    </div>
    <div class="nav-wrappe">
      <ul id="nav-mobile" class="left hide-on-med-and-down">
        <li><a class="dropdown-button" href="#" data-activates="dropdown1">Dropdown<i class="material-icons right">arrow_drop_down</i></a>       
          <ul id="dropdown1" class="dropdown-content">
            <li><a href="#!">one</a></li>
            <li><a href="#!">two</a></li>
            <li class="divider"></li>
            <li><a href="#!">three</a></li>
          </ul>
       </li>
      </ul>
    </div>
  </nav>
  </div>
  
  <div class="carousel carousel-slider center" data-indicators="true">
    <div class="carousel-fixed-item center">
      <a class="btn waves-effect white grey-text darken-text-2">button</a>
      <a class="hoverable btn" onclick="Materialize.toast('I am a toast', 4000)">Toast!</a>
      <a class="btn btn-floating pulse"><i class="material-icons">menu</i></a>
    </div>
    <div class="carousel-item red white-text" href="#one!">
      <h2>First Panel</h2>
      <p class="white-text">This is your first panel</p>
    </div>
    <div class="carousel-item amber white-text" href="#two!">
      <h2>Second Panel</h2>
      <p class="white-text">This is your second panel</p>
    </div>
    <div class="carousel-item green white-text" href="#three!">
      <h2>Third Panel</h2>
      <p class="white-text">This is your third panel</p>
    </div>
    <div class="carousel-item blue white-text" href="#four!">
      <h2>Fourth Panel</h2>
      <p class="white-text">This is your fourth panel</p>
    </div>
  </div>

  <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="https://lorempixel.com/250/250/nature/1">
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">Card Title<i class="material-icons right">more_vert</i></span>
      <p><a href="#">This is a link</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
      <p>Here is some more information about this product that is only revealed once clicked on.</p>
    </div>
  </div>
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {

}
