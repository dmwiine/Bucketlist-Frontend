import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBucketlistsComponent } from './search-bucketlists.component';

describe('SearchBucketlistsComponent', () => {
  let component: SearchBucketlistsComponent;
  let fixture: ComponentFixture<SearchBucketlistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBucketlistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBucketlistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
