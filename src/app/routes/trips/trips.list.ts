import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Trip } from '@models/trip.interface';

@Component({
  selector: 'app-trips-list',
  template: `
    <ul>
      <li *ngFor="let trip of trips">
        <span>
          <strong>🔭 {{ trip.destination }} </strong>
        </span>
        <span>
          <em>🚀 {{ trip.startDate | date: 'dd/MM/yyyy' }} </em>
        </span>
        <span>⏱️ {{ trip.endDate | date: 'dd/MM/yyyy' }} </span>
        <span>
          <a [routerLink]="['book', trip.id]" role="button">✍🏼 Book trip</a>
        </span>
      </li>
    </ul>
    <!-- <ul *ngIf="tripsState$ | async as tripsState">
      <li *ngFor="let trip of tripsState.data">
        <span>
          <strong>🔭 {{ trip.destination }} </strong>
        </span>
        <span>
          <em>🚀 {{ trip.endDate | date: 'dd/MM/yyyy' }} </em>
        </span>
        <span (click)="onDeleteTrip(trip)">
          🗑️ <small>{{ trip.id }}</small>
        </span>
      </li>
    </ul> -->
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TripsList {
  @Input() trips: Trip[] = [];
  // @Output() delete = new EventEmitter<Trip>();
  // tripsState$ = this.service.selectTripsState$();

  // constructor(private service: TripsService) {
  //   this.service.loadTrips();
  // }

  // onDeleteTrip(trip: Trip) {
  //   this.service.deleteTrip(trip);
  // }
}
