import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  mainInvoiceText: string = "Invoices";
  reviewInvoice: string = "Review all invoices >";
  allInvoicesDone: string = "All invoices are done";
  discountTitle: string = "Discounts for You and Your friend!"

  steps = ["Step 1: Call", "Step 2: Talk", "Step 3: Deliver"];
  btnReceiveDiscount: string = "Receive discount";
  randomText: string = "Lorem ipsum dolor sit amet consectetur, adipisicing elit.";
  discountOfMonth: string = "Discounts of this Month";
}
