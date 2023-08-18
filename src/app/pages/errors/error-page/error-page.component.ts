import { Component } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent {

  public errorCode!: number;
  public errorTitle!: string;
  public errorMsg!: string;

  constructor(private _router: Router, private _route: ActivatedRoute){
    this._router.events.subscribe( data =>{
      if (data instanceof ActivationEnd){
        this.errorCode = data.snapshot.data['errorCode'];
        this.switchMsg(this.errorCode);
      }
    })
  }

  navigateToHome(){
    this._router.navigateByUrl("/");
  }

  switchMsg(errorCode: number){
    switch (errorCode) {
      case 400:
        this.errorTitle = "Bad Request";
        this.errorMsg = "Oops! It seems like the request you sent to our server was malformed or incorrect. Please check the data you're submitting and ensure it follows the required format."
      break;
      case 401:
        this.errorTitle = "Unauthorized";
        this.errorMsg = "We're sorry, but the resource you're trying to access requires proper authentication. Please make sure you are logged in with the correct credentials or have the necessary permissions to view this content."
      break;
      case 404:
        this.errorTitle = "Not Found";
        this.errorMsg = "We couldn't find the page you're looking for. It might have been moved, deleted, or the URL could be misspelled. Please double-check the URL or navigate back to our homepage."
      break;
      case 405:
        this.errorTitle = "Method Not Allowed";
        this.errorMsg = "Uh-oh! The method you used to access this resource is not allowed. Please review the allowed methods for this endpoint and ensure you're using the correct HTTP method."
      break;
      case 408:
        this.errorTitle = "Request Timeout";
        this.errorMsg = "Looks like our server is taking longer than usual to respond. It might be due to a temporary glitch or a slow internet connection. You can try refreshing the page or coming back later."
      break;
      case 500:
        this.errorTitle = "Internal Server Error";
        this.errorMsg = "Something went wrong on our end. Our server encountered an unexpected issue while processing your request. We're working to fix it. In the meantime, you might want to go back to the previous page or try again later."
      break;

      default:
        this.errorMsg = 'Oops, something went wrong, try to refresh the page or go back to our homepage.'
        break;
    }
  }

}
