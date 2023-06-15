import { Component, OnInit } from '@angular/core';
import {MegaMenuItem,MenuItem} from 'primeng/api';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent  {

  items!: MenuItem[];

  ngOnInit() {
      this.items = [
          {
              label:'Home',
              items:[
                  {
                      label:'New',
                      icon:'pi pi-fw pi-plus',
                      items:[
                      {
                          label:'Bookmark',
                          icon:'pi pi-fw pi-bookmark'
                      },
                      {
                          label:'Video',
                          icon:'pi pi-fw pi-video'
                      },

                      ]
                  },
                  {
                      label:'Delete',
                      icon:'pi pi-fw pi-trash'
                  },
                  {
                      separator:true
                  },
                  {
                      label:'Export',
                      icon:'pi pi-fw pi-external-link'
                  }
              ]
          },

          {
            label:'About Us',
            items:[
                {
                    label:'New',
                    icon:'pi pi-fw pi-plus',
                    items:[
                    {
                        label:'Bookmark',
                        icon:'pi pi-fw pi-bookmark'
                    },
                    {
                        label:'Video',
                        icon:'pi pi-fw pi-video'
                    },

                    ]
                },
                {
                    label:'Delete',
                    icon:'pi pi-fw pi-trash'
                },
                {
                    separator:true
                },
                {
                    label:'Export',
                    icon:'pi pi-fw pi-external-link'
                }
            ]
        },

        {
            label:'Booking',
            items:[
                {
                    label:'New',
                    icon:'pi pi-fw pi-plus',
                    items:[
                    {
                        label:'Bookmark',
                        icon:'pi pi-fw pi-bookmark'
                    },
                    {
                        label:'Video',
                        icon:'pi pi-fw pi-video'
                    },

                    ]
                },
                {
                    label:'Delete',
                    icon:'pi pi-fw pi-trash'
                },
                {
                    separator:true
                },
                {
                    label:'Export',
                    icon:'pi pi-fw pi-external-link'
                }
            ]
        },

        {
            label:'Products',
            items:[
                {
                    label:'New',
                    icon:'pi pi-fw pi-plus',
                    items:[
                    {
                        label:'Bookmark',
                        icon:'pi pi-fw pi-bookmark'
                    },
                    {
                        label:'Video',
                        icon:'pi pi-fw pi-video'
                    },

                    ]
                },
                {
                    label:'Delete',
                    icon:'pi pi-fw pi-trash'
                },
                {
                    separator:true
                },
                {
                    label:'Export',
                    icon:'pi pi-fw pi-external-link'
                }
            ]
        },


          {
            label:'Services',
            items:[
                {
                    label:'New',
                    icon:'pi pi-fw pi-plus',
                    items:[
                    {
                        label:'Bookmark',
                        icon:'pi pi-fw pi-bookmark'
                    },
                    {
                        label:'Video',
                        icon:'pi pi-fw pi-video'
                    },

                    ]
                },
                {
                    label:'Delete',
                    icon:'pi pi-fw pi-trash'
                },
                {
                    separator:true
                },
                {
                    label:'Export',
                    icon:'pi pi-fw pi-external-link'
                }
            ]
        },

          {
              label:'Events',
              icon:'pi pi-fw pi-calendar',
              items:[
                  {
                      label:'Edit',
                      icon:'pi pi-fw pi-pencil',
                      items:[
                      {
                          label:'Save',
                          icon:'pi pi-fw pi-calendar-plus'
                      },
                      {
                          label:'Delete',
                          icon:'pi pi-fw pi-calendar-minus'
                      },

                      ]
                  },
                  {
                      label:'Archieve',
                      icon:'pi pi-fw pi-calendar-times',
                      items:[
                      {
                          label:'Remove',
                          icon:'pi pi-fw pi-calendar-minus'
                      }
                      ]
                  }
              ]
          },
         
      ];
  } 


}
