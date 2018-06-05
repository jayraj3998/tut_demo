import { Component, OnInit } from "@angular/core";
import { ProductClass } from "./productclass";
@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  flag:boolean=false;
  p_id:number;
  p_name:string;
  p_price:number;
  p_img:string;
  p_mfg:string;
  p_status:string='yes';
  arr: ProductClass[] = [
    new ProductClass(101, "ayz", 1000, "../../assets/images/1.png", "xyz",'yes'),
    new ProductClass(102, 'abc', 22000, '../../assets/images/2.png', 'mno','no')
  ];
  constructor() {}

  ngOnInit() {}
  onAdd1(){
    if(this.flag){
      this.flag=false;
    }
    else{
      this.flag=true;
    }
  }
  onDelete(item: ProductClass) {
    this.arr.splice(this.arr.indexOf(item), 1);
  }
  onAdd(){
    this.arr.push(new ProductClass(this.p_id,this.p_name,this.p_price,this.p_img,this.p_mfg,this.p_status));
    this.flag=false;
  }
  onUpdate(item:ProductClass){
    if(item.p_status=='yes'){
      item.p_status='no';
    }
    else{
      item.p_status='yes';
    }
  }
}
