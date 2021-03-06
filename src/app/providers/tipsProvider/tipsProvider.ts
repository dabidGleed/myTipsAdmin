import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {globalService} from './globalService';
import {Component} from '@angular/core';

@Injectable()
export class TipsService {
  data;
  options;
  imageData;
  constructor(public http: Http, public globalservices:globalService) {
 //   console.log(globalservices.url + 'category');
    let headers = new Headers();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    this.options = new RequestOptions({headers: headers});
    console.log('Hello TipsService Provider');
  }

  load(userId) {
    console.log('ascasdcadsca')
    return new Promise(resolve => {
      this.http.get('http://ec2-52-66-121-193.ap-south-1.compute.amazonaws.com/tips/'+ userId +'/list/allUser')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });

  }

  public getCategories() {
    return new Promise(resolve => {
      this.http.get('http://ec2-52-66-121-193.ap-south-1.compute.amazonaws.com/category/list/all')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });

  }

  public getOneTip(tipId) {
    return new Promise(resolve => {
      this.http.get('http://ec2-52-66-121-193.ap-south-1.compute.amazonaws.com/tips/get/' + tipId + '/one')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });

  }

  public addTip(data,idVal) {
    return new Promise(resolve => {
      this.http.post('http://ec2-52-66-121-193.ap-south-1.compute.amazonaws.com/tips/'+idVal+'/create', data)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

    public AddCategory(data) {
    return new Promise(resolve => {
      this.http.post('http://ec2-52-66-121-193.ap-south-1.compute.amazonaws.com/category/12345/create', data)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

  public updateTip(tipId, data) {
    return new Promise(resolve => {
      this.http.put('http://ec2-52-66-121-193.ap-south-1.compute.amazonaws.com/tips/' + tipId + '/update', data)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

  deleteTip(tipId) {
    return new Promise(resolve => {
      this.http.delete('http://ec2-52-66-121-193.ap-south-1.compute.amazonaws.com/tips/' + tipId + '/delete')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }
  makePublish(tipId){
    return new Promise(resolve => {
      this.http.get('http://ec2-52-66-121-193.ap-south-1.compute.amazonaws.com/tips/' + tipId + '/make/publish')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }
  fileUploadBase64(file) {
    console.log(file);
    // let headers = new Headers();
    // let formData: FormData = new FormData();
    // formData.append('content', file);

    var data:any = {
      imgbase64:file
    }

    return new Promise(resolve => {
      this.http.post('http://ec2-52-66-121-193.ap-south-1.compute.amazonaws.com/file/base64/upload', data)
      // this.http.post('http://ec2-52-66-121-193.ap-south-1.compute.amazonaws.com/file/uploads3', formData, {
        // headers: headers
      // })
        .map(res => res.json())
        .subscribe(data => {
          // console.log(data)
          this.data = data;
          resolve(this.data);
        })
    });
  }

   fileUpload(file) {
    console.log(file);
    let headers = new Headers();
    let formData: FormData = new FormData();
    formData.append('content', file);

    var data:any = {
      imgbase64:file










































      
    }

    return new Promise(resolve => {
      // this.http.post('http://ec2-52-66-121-193.ap-south-1.compute.amazonaws.com/file/base64/upload', data)
      this.http.post('http://ec2-52-66-121-193.ap-south-1.compute.amazonaws.com/file/uploads3', formData, {
        headers: headers
      })
        .map(res => res.json())
        .subscribe(data => {
          // console.log(data)
          this.data = data;
          resolve(this.data);
        })
    });
  }

 public getdeletedTip(userId) { 
    return new Promise(resolve => {
      this.http.get('http://ec2-52-66-121-193.ap-south-1.compute.amazonaws.com/tips/'+ userId +'/deletedUserTips')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

   public perdeleteTip(tipId) {   
    return new Promise(resolve => {
      this.http.delete('http://ec2-52-66-121-193.ap-south-1.compute.amazonaws.com/tips/' + tipId + '/trash')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

     public deleteCategory(categoryId) {
    return new Promise(resolve => {
      this.http.delete('http://ec2-52-66-121-193.ap-south-1.compute.amazonaws.com/category/' + categoryId + '/deleteCategory')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

    public getOneCategory(categoryId) {  
    return new Promise(resolve => {
      this.http.get('http://ec2-52-66-121-193.ap-south-1.compute.amazonaws.com/category/' + categoryId + '/findCategory')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });

  }
    public updateCategory(categoryId, data) {
    return new Promise(resolve => {
      this.http.put('http://ec2-52-66-121-193.ap-south-1.compute.amazonaws.com/category/' + categoryId + '/update', data)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

    allTips(userId) {
    return new Promise(resolve => { 
      this.http.get('http://ec2-52-66-121-193.ap-south-1.compute.amazonaws.com/tips/'+ userId +'/list/allUser')
        .map(res => res.json())
        .subscribe(data => {
          let b =[];
          data.forEach(element => {
            if(element.userId != userId){
               b.push(element);
            }
          });
           this.data = b;
           resolve(this.data);
        });
    });

  }

  vendorTips() {
    return new Promise(resolve => { 
      this.http.get('http://ec2-52-66-121-193.ap-south-1.compute.amazonaws.com/tips/vendorTips')
        .map(res => res.json())
        .subscribe(data => {
           resolve(data);
        });
    });

  }

  searchVendorsTipsAll(searchVal, categoryIdVal){   
    console.log(categoryIdVal)   
    if(categoryIdVal == 'all'){
      return new Promise(resolve => {
        this.http.get('http://ec2-52-66-121-193.ap-south-1.compute.amazonaws.com/tips/vendorTips?str='+searchVal)
          .map(res => res.json())
          .subscribe(data => {
            this.data = data;
            resolve(this.data);            
          });
      });
    } else{
       return new Promise(resolve => {
        this.http.get('http://ec2-52-66-121-193.ap-south-1.compute.amazonaws.com/tips/vendorTips?str='+searchVal+'&categoryId='+categoryIdVal)
          .map(res => res.json())
          .subscribe(data => {
            this.data = data;
            resolve(this.data);
          });
      });
    }

  }

 searchTips(searchVal, categoryIdVal, userId){
    if(categoryIdVal == 'all'){
      return new Promise(resolve => {
        this.http.get('http://ec2-52-66-121-193.ap-south-1.compute.amazonaws.com/tips/'+ userId +'/'+ searchVal +'/userWiseTipsSearch')
          .map(res => res.json())
          .subscribe(data => {
            this.data = data;
            resolve(this.data);
          });
      });
    } else if(categoryIdVal != 'all'){
       return new Promise(resolve => {
        this.http.get('http://ec2-52-66-121-193.ap-south-1.compute.amazonaws.com/tips/'+categoryIdVal+'/'+searchVal+'/categoryTipsSearch')
          .map(res => res.json())
          .subscribe(data => {
            this.data = data;
            resolve(this.data);
          });
      });
    }
 }

 searchUserDelTips(searchVal, categoryIdVal, userId){
  if(categoryIdVal == 'all'){
    return new Promise(resolve => {
      this.http.get('http://ec2-52-66-121-193.ap-south-1.compute.amazonaws.com/tips/'+ userId +'/deletedUserTips?str='+ searchVal )
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
          console.log(this.data);
          
        });
    });
  // } else if(categoryIdVal != 'all'){
  //    return new Promise(resolve => {
  //     this.http.get('http://ec2-52-66-121-193.ap-south-1.compute.amazonaws.com/tips/'+categoryIdVal+'/'+searchVal+'/categoryTipsSearch')
  //       .map(res => res.json())
  //       .subscribe(data => {
  //         this.data = data;
  //         resolve(this.data);
  //       });
  //   });
   }
}
 
  searchTipsAll(searchVal, categoryIdVal){      
    if(categoryIdVal == 'all'){
      return new Promise(resolve => {
        this.http.get('http://ec2-52-66-121-193.ap-south-1.compute.amazonaws.com/tips/'+ searchVal +'/searchTips')
          .map(res => res.json())
          .subscribe(data => {
            this.data = data;
            resolve(this.data);
          });
      });
    } else if(categoryIdVal != 'all'){
       return new Promise(resolve => {
        this.http.get('http://ec2-52-66-121-193.ap-south-1.compute.amazonaws.com/tips/'+categoryIdVal+'/'+searchVal+'/categoryTipsSearch')
          .map(res => res.json())
          .subscribe(data => {
            this.data = data;
            resolve(this.data);
          });
      });
    }

  }

  public getVendorList() {  
    return new Promise(resolve => {
      this.http.get('http://ec2-52-66-121-193.ap-south-1.compute.amazonaws.com/user/userVendorDetails')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });

  }

  public vendorBlock(userId){  
    return new Promise(resolve => {
      this.http.get('http://ec2-52-66-121-193.ap-south-1.compute.amazonaws.com/user/'+userId+'/userBlockActive')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }
}

