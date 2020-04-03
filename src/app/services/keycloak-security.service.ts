import { Injectable } from '@angular/core';
import {KeycloakInstance} from 'keycloak-js';
declare var Keycloak:any;

@Injectable({
  providedIn: 'root'
})
export class KeycloakSecurityService {
//Si on utilise la première méthode on est obligé d'utiliser keycloakInstance
// public kc:KeycloakInstance;
  public kc;

  constructor() { }

/*
  async init()
  {
    console.log("Security Initialisation...");
    this.kc=new Keycloak({
      url:"http://localhost:8080/auth",
      realm:"ecom-realm",
      clientId:"AngularProductsApp"
    });
    await this.kc.init({
     //onLoad:"login-required"
      onLoad:"check-sso",

    });
    console.log(this.kc.token)

  }
  */
 public  init()
  {
    return new Promise((resolve, reject) => {

      console.log("Security Initialisation...");
      this.kc=new Keycloak({
        url:"http://localhost:8080/auth",
        realm:"ecom-realm",
        clientId:"AngularProductsApp"
      });
      this.kc.init({
        //onLoad:"login-required"
        onLoad:"check-sso",
        promiseType:'native'
      }).then((authenticated)=>{
        resolve({auth:authenticated,token:this.kc.token })
      }).catch(err=>{
        reject(err)
      });
    });
  }


}
