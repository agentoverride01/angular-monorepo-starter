import { TestBed } from '@angular/core/testing'
import { ButtonModule, ButtonComponent } from '@mono/components/button' 

describe('Button', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ButtonModule ],
    }).compileComponents()
  })

  it('should create button component', () => {
    const fixture = TestBed.createComponent(ButtonComponent)
    const app = fixture.componentInstance
    expect(app).toBeTruthy()
  })

})