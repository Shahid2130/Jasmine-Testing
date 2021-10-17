import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import {WebStorageService} from './web-storage.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('First test case of services',()=>{
let service: WebStorageService;
let httpClient:any;
let httpClientTestingModule:HttpClientTestingModule
 beforeEach(()=>{
 //  service= new WebStorageService(httpClient)
  TestBed.configureTestingModule({
    imports:[HttpClientTestingModule],
    providers:[WebStorageService]
  })
  service= TestBed.inject(WebStorageService);
 // httpClientTestingModule=TestBed.inject(HttpClientTestingModule)
 })

 it('should return all employee details',(done:DoneFn)=>{
   let mockResponse:any=[{
    "id": 1,
    "first_name": "Sebastian",
    "last_name": "Eschweiler",
    "email": "sebastian@codingthesmartway.com"
  },
  {
    "id": 2,
    "first_name": "Steve",
    "last_name": "Palmer",
    "email": "steve@codingthesmartway.com"
  }];
  spyOn(service,'getAllDetails').and.returnValue(of(mockResponse))
   service.getAllDetails().subscribe(res=>{
   expect(res).toBe(mockResponse);
    done();
   });
 })
 it('should return single employee details',(done:DoneFn)=>{
  let mockResponse:any=[
 {
   "id": 2,
   "first_name": "Steve",
   "last_name": "Palmer",
   "email": "steve@codingthesmartway.com"
 }];
 spyOn(service,'getSingleDetails').and.returnValue(of(mockResponse))
  service.getSingleDetails(2).subscribe(res=>{
  expect(res).toBe(mockResponse);
   done();
  })
})


it('add new employee details',(done:DoneFn)=>{
  let mockResponse:any=[
 {
  "email": "madhu23codingthesmartway.com",
"first_name": "madhu79",
"id": 23,
"last_name": "singh13"
 }];
 let newDetail={
  "email": "madhu23codingthesmartway.com",
"first_name": "madhu79",
"id": 23,
"last_name": "singh13"
 }
 spyOn(service,'addNewDetails').and.returnValue(of(mockResponse))
  service.addNewDetails(newDetail).subscribe(res=>{
  expect(res).toBe(mockResponse);
   done();
  })
})


it('Delete single employee details',(done:DoneFn)=>{
  let epmtyData={};
  spyOn(service,'deleteDetail').and.returnValue(of(epmtyData));
  service.deleteDetail(4).subscribe((res)=>{
    expect(res).toEqual(epmtyData);
    done();
  })
})
})


