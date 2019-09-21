import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Output() public searchItemEmitter: EventEmitter<string> = new EventEmitter<string>();
  public searchFormGroup: FormGroup = new FormGroup({
    searchInput: new FormControl('')
  });

  public onSubmit(): void {
    this._updateSearchItem();
  }

  public onResetClick(): void {
    this.searchFormGroup.controls.searchInput.patchValue('');
    this._updateSearchItem();
  }

  private _updateSearchItem(): void {
    this.searchItemEmitter.emit(this.searchFormGroup.value.searchInput);
  }
}
