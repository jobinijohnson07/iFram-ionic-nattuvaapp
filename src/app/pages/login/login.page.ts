import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
//import { Store } from '@ngxs/store';
import { AddTutorial, GetTutorial } from '../../app-state/actions/tutorial.actions'
import { Store, Select } from '@ngxs/store';
import { AddUser } from '../../app-state/actions/user.actio';
import { AuthenticateService } from '../../services/authentication.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
// import { CloudMessagingService } from 'src/app/services/cloudmessaging.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  languages: any = [];
  selectedLag: string;
  validations_form: FormGroup;
  errorMessage: string = '';

  constructor(public router: Router,
    public translate: TranslateService,
    private authService: AuthenticateService,
    private store: Store,
    public formBuilder: FormBuilder,
    // public fcmService: CloudMessagingService
    ) {
       //gets permission for Fcm messaging.
      //  this.fcmService.getPermission();
      //  //for receiving fcm messages.
      //  this.fcmService.receiveMessage();


    this.selectedLag = 'en';
    // this.tutorials$ = this.store.select(state => state.tutorials.tutorials)    
    translate.addLangs(['en', 'ma', 'ta', 'ka', 'te']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|ma/) ? browserLang : 'en');
    this.languages = ['en', 'ma', 'ta', 'ka', 'te']
  }

  addTutorial(name, url) {
    this.store.dispatch(new AddUser({ email: name, password: url, languages: this.selectedLag }));
  }


  ngOnInit() {

    this.validations_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
    });
  }

  validation_messages = {
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid email.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 5 characters long.' }
    ]
  };

  loginUser(value) {
    this.authService.loginUser(value)
      .then(res => {
        localStorage.setItem('uid', res.user.uid)
        localStorage.setItem('token', res.user.ma)
        this.errorMessage = "";
        this.router.navigate(['/home']);
      }, err => {
        this.errorMessage = err.message;
      })
  }

  translateFntn(value) {
    this.translate.use(value);
    this.selectedLag = value;
  }

  // login() {

  //   this.router.navigate(['/home'])
  // }
  signup() {
    this.router.navigate(['/register'])
  }
}

