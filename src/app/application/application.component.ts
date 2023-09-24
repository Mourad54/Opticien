import { Component,ViewChild, OnInit  } from '@angular/core';
import { ServiceService } from '../service.service';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Model } from './optica.model';
import Swal from 'sweetalert2'
import { ActivatedRoute, Router } from '@angular/router';
import {User} from './user.model'
import * as XLSX from 'xlsx'
@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent {


  @ViewChild('screen', { static: true }) screen: any;
  constructor(private service:ServiceService,private formBuilder:FormBuilder,private router:ActivatedRoute){}
  
  
 


  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [3, 6, 9, 12];
  

  data: any;
  d:any;
  formValue!: FormGroup; 
  formValueA!: FormGroup; 
  obj: Model = new Model;
  User: User= new User;


  filterTerm!: string;

  
  ngOnInit(): void {
    this.service.getList().subscribe(res=>{
      this.data=res;
      
   } ) 


   this.service.getuser().subscribe(res=>{
    this.d= res;
    
 } ) 

   this.formValue = this.formBuilder.group({
    nom:'',
    prenom:'',
    age:'',
    nt:'',
    date:'',
    vslod:'',
    vslog:'',
    tvl:'',
    vspod:'',
    vspog:'',
    tvp:'',
    tlog:'',
    tlod:'',
    tl:'',
    obs:'',
    diametre:'',
    
  })


  this.formValueA = this.formBuilder.group({
    name:'',
    adresse:'',
 
  })

  
  
  }



   Update(){
    this.obj.Nom = this.formValue.value.nom;
    this.obj.Prenom = this.formValue.value.prenom;
    this.obj.Age = this.formValue.value.age;
    this.obj.Nt = this.formValue.value.nt;
    this.obj.Date = this.formValue.value.date;
    this.obj.Vslod= this.formValue.value.vslod;
    this.obj.Vslog = this.formValue.value.vslog;
    this.obj.Tvl = this.formValue.value.tvl;
    this.obj.Vspod = this.formValue.value.vspod;
    this.obj.Vspog = this.formValue.value.vspog;
    this.obj.Tvp = this.formValue.value.tvp;
    this.obj.Tlog= this.formValue.value.tlog;
    this.obj.Tlod = this.formValue.value.tlod;
    this.obj.Tl = this.formValue.value.tl;
    this.obj.Obs = this.formValue.value.obs;
    this.obj.Diametre = this.formValue.value.diametre;
    this.service.put(this.obj,this.obj.id).subscribe(res => {
      Swal.fire(
        'Good job!',
        'Update person with success',
        'success',
     
      ).then(function(){ 
        location.reload();
        });
      this.data;
      
    })



    }               

    Add(){
      this.obj.Nom = this.formValue.value.nom;
      this.obj.Prenom = this.formValue.value.prenom;
      this.obj.Age = this.formValue.value.age;
      this.obj.Nt = this.formValue.value.nt;
      this.obj.Date = this.formValue.value.date;
      this.obj.Vslod= this.formValue.value.vslod;
      this.obj.Vslog = this.formValue.value.vslog;
      this.obj.Tvl = this.formValue.value.tvl;
      this.obj.Vspod = this.formValue.value.vspod;
      this.obj.Vspog = this.formValue.value.vspog;
      this.obj.Tvp = this.formValue.value.tvp;
      this.obj.Tlog= this.formValue.value.tlog;
      this.obj.Tlod = this.formValue.value.tlod;
      this.obj.Tl = this.formValue.value.tl;
      this.obj.Obs = this.formValue.value.obs;
      this.obj.Diametre = this.formValue.value.diametre;
    this.service.post(this.obj).subscribe(res => { 
      Swal.fire(
        'Good job!',
        'Add person successful',
        'success',
     
      ).then(function(){ 
        location.reload();
        });
     this.data;
    })


   }

 

  Edit(data:any){
    this.formValue.controls['nom'].setValue(data.Nom);
    this.formValue.controls['prenom'].setValue(data.Prenom);
    this.formValue.controls['age'].setValue(data.Age);
    this.formValue.controls['nt'].setValue(data.Nt);
    this.formValue.controls['date'].setValue(data.Date);
    this.formValue.controls['vslod'].setValue(data.Vslod);
    this.formValue.controls['vslog'].setValue(data.Vslog);
    this.formValue.controls['tvl'].setValue(data.Tvl);
    this.formValue.controls['vspod'].setValue(data.Vspod);
    this.formValue.controls['vspog'].setValue(data.Vspog);
    this.formValue.controls['tvp'].setValue(data.Tvp);
    this.formValue.controls['tlog'].setValue(data.Tlog);
    this.formValue.controls['tlod'].setValue(data.Tlod);
    this.formValue.controls['tl'].setValue(data.Tl);
    this.formValue.controls['obs'].setValue(data.Obs);
    this.formValue.controls['diametre'].setValue(data.Diametre);
    this.obj.id = data.id;
 
  }


  getList(data:any){
    this.data=data;
    this.service.getbyid(data.id).subscribe((data => {
      console.log(data, "getres==>");
      
    }));

  }




  Deleteid(data:any){
    this.service.delete(data.id).subscribe((res => {
      Swal.fire(
        'Good job!',
        'Delete person with success',
        'error'
      ).then(function(){ 
        location.reload();
        });
      
     
    }))
  

  }

 
DeleteAll(){
  
  this.service.deleteAllOptica().subscribe((res => {
    Swal.fire(
      'Good job!',
      'Delete All with success',
      'error',
   
    ).then(function(){ 
      location.reload();
      });
    
    
  }))

} 
 

onTableDataChange(event: any) {
  this.page = event;
  this.ngOnInit();
}
onTableSizeChange(event: any): void {
  this.tableSize = event.target.value;
  this.page = 1;
  this.ngOnInit();
}





UpdateUser(){
 
  this.User.name = this.formValueA.value.name;
  this.User.adresse = this.formValueA.value.adresse;

 
    this.service.putUser(this.User,this.User.id).subscribe(res => {
    Swal.fire(
      'Good job!',
      'Update person with success',
      'success',
   
    ).then(function(){ 
      location.reload();
      });
    this.d;
    
  })



  } 






  Edituser(d:any){
    this.formValueA.controls['name'].setValue(d.name);
    this.formValueA.controls['adresse'].setValue(d.adresse);
   
    this.User.id = d.id;

 
  }
 

  exportexcel(): void {
    /* pass here the table id */
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.data);
    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    /* save to file */
    XLSX.writeFile(wb, 'Optica.xlsx');
}
}








    


