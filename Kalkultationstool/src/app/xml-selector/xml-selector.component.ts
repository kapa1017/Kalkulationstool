import {Component, ElementRef, OnInit} from '@angular/core';
import {BackendService} from "../Services/backend.service";
import {Observable} from "rxjs/Observable";
import {Http, RequestOptions} from "@angular/http";
import {NavigationService} from "../Services/navigation.service";
import {FileUploader} from "ng2-file-upload";

@Component({
  selector: 'app-xml-selector',
  templateUrl: './xml-selector.component.html',
  styleUrls: ['./xml-selector.component.css']
})
export class XmlSelectorComponent implements OnInit {

  items:any;

  public uploader:FileUploader = new FileUploader({url: 'localhost:3000/upload', itemAlias: 'xml-file'});

  constructor(private http: Http,
              private backendService: BackendService,
              private navigationService: NavigationService,
              private el: ElementRef) {
    backendService.getAllFiles().subscribe((res: Object[]) => {
      this.items = res;
    })
  }


  ngOnInit() {
    //override the onAfterAddingfile property of the uploader so it doesn't authenticate with //credentials.
    this.uploader.onAfterAddingFile = (file)=> { file.withCredentials = false; };
    //overide the onCompleteItem property of the uploader so we are
    //able to deal with the server response.
    this.uploader.onCompleteItem = (item:any, response:any, status:any, headers:any) => {
      console.log("ImageUpload:uploaded:", item, status, response);
    };
  }

  select(item){
    debugger;
    this.backendService.idChanged(item._id);
    this.navigationService.isNavigationChanged(0);
  }

  upload() {

    debugger;

    //locate the file element meant for the file upload.
    let inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#xml-file');
    //get the total amount of files attached to the file input.
    let fileCount: number = inputEl.files.length;
    //create a new fromdata instance
    let formData = new FormData();
    //check if the filecount is greater than zero, to be sure a file was selected.
    if (fileCount > 0) { // a file was selected
      //append the key name 'photo' with the first file in the element
      formData.append('xml-file', inputEl.files.item(0));
      //call the angular http method
      this.http.post( 'http://localhost:3000/upload', formData, {}).toPromise().then(() => {
        this.backendService.getAllFiles().subscribe((res: Object[]) => {
          this.items = res;
        })
      })
    }
  }

}
