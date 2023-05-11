import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hoursFormat'
})
export class HoursFormatPipe implements PipeTransform {
  transform(value: any): any {
    if (!value) {
      return '';
    }
    let seconds = Math.floor(value / 1000)
    let minutes = Math.floor(seconds / 60)
    let hours = Math.floor(minutes / 60)
    seconds = seconds % 60
    minutes = minutes % 60
    hours = hours % 24
    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = seconds.toString().padStart(2, '0');
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }
}
