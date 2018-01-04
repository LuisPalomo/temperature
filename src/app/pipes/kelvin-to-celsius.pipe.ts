import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'kelvinToCelsius'
})
export class KelvinToCelsiusPipe implements PipeTransform {
    transform(kelvins: number): number {
        return kelvins ? kelvins - 273.15 : undefined;
    }
}
