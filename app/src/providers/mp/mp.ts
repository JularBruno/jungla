import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseProvider } from '../base/base';
import { Constants } from '../../app/app.constants';

@Injectable()
export class MPProvider extends BaseProvider{

  getApiEndPoint(){
    return Constants.API_METHOD_MP;
  }

  getSubscriptionInitPoint(user) {
    var url = this.getServerUrl() + this.getApiEndPoint() + "/subscription/initPoint";

    return this.http.post(url,user)
    .toPromise()
    .then(response => {
      return response;
    })
    .catch(this.handleError.bind(this));
  }

  getArticleInitPoint(user,article) {
    var url = this.getServerUrl() + this.getApiEndPoint() + "/article/initPoint";

    let params = user;
    params.article = article;
    // if(article.price)
    //   params.article.ammount = article.price;

    return this.http.post(url,params)
    .toPromise()
    .then(response => {
      return response;
    })
    .catch(this.handleError.bind(this));
  }

  createCustomer(user) {
    var url = this.getServerUrl() + this.getApiEndPoint() + "/customers";

    console.log(user);

    const params = {
      email:user.user,
      lastName:user.lastName,
      firstName:user.firstName
    }

//    let params = user;
    // if(article.price)
    //   params.article.ammount = article.price;

    return this.http.post(url,params)
    .toPromise()
    .then(response => {
      return response;
    })
    .catch(this.handleMPError.bind(this));
  }


  getCustomerCards(user) {
    var url = this.getServerUrl() + this.getApiEndPoint() + "/customers/" + user.mpCustomerId + "/cards";

    console.log(user);

    return this.http.get(url)
    .toPromise()
    .then(response => {
      return response;
    })
    .catch(this.handleMPError.bind(this));
  }

  getCustomerCardToken(user,card,securityCode) {
    var url = this.getServerUrl() + this.getApiEndPoint() + "/customers/" + user.mpCustomerId + "/cards/" + card.id + "/token";

    console.log(user);

    const params = {securityCode:securityCode};

    return this.http.post(url,params)
    .toPromise()
    .then(response => {
      return response;
    })
    .catch(this.handleMPError.bind(this));
  }

  createPayment(user,token,amount,description,paymentItemCode,articleId,installments,methodId,externaReference) {
    var url = this.getServerUrl() + this.getApiEndPoint() + "/payments";

    console.log(user);

    const params = {
    	"paymentToken":{
    		"id":token
    	}
    	,
    	"paymentTransaction":{
    		"amount":amount,
    		"description":description,
        "paymentItemCode":paymentItemCode,
    		"installments":installments,
    		"methodId":methodId,
        "userId":user.id,
        "articleId":articleId,
    		"customerId":user.mpCustomerId,
    		"externalReference":externaReference
    	}
    };

    return this.http.post(url,params)
    .toPromise()
    .then(response => {
      return response;
    })
    .catch(this.handleMPError.bind(this));
  }

  public handleMPError(response: any): Promise<any> {
    if(!response.status){
      // alert(JSON.stringify(response));
      return Promise.reject(response);
    } else if(response.status == 401){
      // alert("No se encuentra autorizado.");
      return Promise.reject("No se encuentra autorizado.");
    } else if(response.status == 404){
      return Promise.reject("No se encuentra el registro: " + response.url);
    } else if(response.status == 400){
      console.error('An error occurred', response);
      let error = "No se puede realizar la accion";
      if(response.error) if(response.error.error) if(response.error.error.length > 0){
        if(response.error.error[0].code == "101")
          error = "El usuario ya existe"
      }
      return Promise.reject(error);
    } else if(response.status == 500){
      var body = JSON.parse(response._body);
      return Promise.reject(body.description);
    } else {
      console.error('An error occurred', response);
      var message = response.message || response;
      if(response.error) if(response.error.errors) if(response.error.errors.length > 0)
        message = response.error.errors[0].message;
      return Promise.reject(message);
    }
  }

}
