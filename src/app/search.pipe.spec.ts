import {FilterTextPipe} from './search.pipe';

describe('search pipe test cases',()=>{
    let pipe=new FilterTextPipe();
    let employeeDetails:any=[{
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
    
    it('search pipe test suit',()=>{
        expect(pipe).toBeTruthy()
    });
    it('should return filter value whose first name is Sebastian',()=>{
        let filterValue=[{
            "id": 1,
            "first_name": "Sebastian",
            "last_name": "Eschweiler",
            "email": "sebastian@codingthesmartway.com"
          }]
        expect(pipe.transform(employeeDetails,'Sebastian')).toEqual(filterValue)
    });
    it('should return all value initially',()=>{ 
        expect(pipe.transform(employeeDetails,'')).toEqual(employeeDetails)
    })
    it('should return empty value whose first name is not jshbdjashd',()=>{ 
        expect(pipe.transform(employeeDetails,'jshbdjashd')).toEqual([])
    })
})