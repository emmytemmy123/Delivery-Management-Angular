import { Component, OnInit } from '@angular/core';
import { FilterService, SelectItemGroup } from 'primeng/api';
import { CountryService } from '../../Service/countryservice';

@Component({
  selector: 'app-auto-text-feild',
  templateUrl: './auto-text-feild.component.html',
  styleUrls: ['./auto-text-feild.component.css']
})
export class AutoTextFeildComponent implements OnInit {

  selectedCountry: any;

  countries: any[] = [];

  filteredCountries: any[] = [];

  selectedCountries: any[] = [];

  selectedCountryAdvanced: any[] = [];

  filteredBrands: any[] = [];

  groupedCities: SelectItemGroup[] = [];

  filteredGroups: any[] = [];

  constructor(
    private countryService: CountryService,
    private filterService: FilterService
  ) {}

  ngOnInit() {
    this.countryService.getCountries().then((countries: any[]) => {
      this.countries = countries;
    });

    this.groupedCities = [
      {
        label: "Germany",
        value: "de",
        items: [
          { label: "Berlin", value: "Berlin" },
          { label: "Frankfurt", value: "Frankfurt" },
          { label: "Hamburg", value: "Hamburg" },
          { label: "Munich", value: "Munich" }
        ]
      },
      {
        label: "USA",
        value: "us",
        items: [
          { label: "Chicago", value: "Chicago" },
          { label: "Los Angeles", value: "Los Angeles" },
          { label: "New York", value: "New York" },
          { label: "San Francisco", value: "San Francisco" }
        ]
      },
      {
        label: "Japan",
        value: "jp",
        items: [
          { label: "Kyoto", value: "Kyoto" },
          { label: "Osaka", value: "Osaka" },
          { label: "Tokyo", value: "Tokyo" },
          { label: "Yokohama", value: "Yokohama" }
        ]
      }
    ];
  }

  filterCountry(event: { query: any; }) {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.countries.length; i++) {
      let country = this.countries[i];
      if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(country);
      }
    }

    this.filteredCountries = filtered;
  }

  filterGroupedCity(event: { query: any; }) {
    let query = event.query;
    let filteredGroups = [];

    for (let optgroup of this.groupedCities) {
      let filteredSubOptions = this.filterService.filter(
        optgroup.items,
        ["label"],
        query,
        "contains"
      );
      if (filteredSubOptions && filteredSubOptions.length) {
        filteredGroups.push({
          label: optgroup.label,
          value: optgroup.value,
          items: filteredSubOptions
        });

      }
    }
  }

}
