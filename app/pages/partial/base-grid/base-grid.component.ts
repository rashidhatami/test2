import { Component, OnInit } from '@angular/core';
import {enableRtl, L10n, setCulture} from '@syncfusion/ej2-base';

enableRtl(true);
setCulture('fa');

L10n.load({
  'fa': {
    "grid": {
      "EmptyRecord": "هیچ پرونده برای نمایش نیست",
      "True": "درست است، واقعی",
      "False": "نادرست",
      "InvalidFilterMessage": "داده فیلتر نامعتبر است",
      "GroupDropArea": "یک هدر ستون را اینجا بکشید تا ستون آن گروه بندی شود",
      "UnGroup": "برای گروه‌بندی اینجا را کلیک کنید",
      "GroupDisable": "گروه بندی برای این ستون غیرفعال است",
      "FilterbarTitle": "فیلتر نوار سلول",
      "EmptyDataSourceError": "منبع داده نباید در بار اولیه خالی باشد زیرا ستون ها از منبع داده ها در AutoGenerate Column Grid تولید می شوند",
      "Add": "اضافه کردن",
      "Edit": "ویرایش",
      "Cancel": "لغو",
      "Update": "به روز رسانی",
      "Delete": "حذف",
      "Print": "چاپ",
      "Pdfexport": "خروجی PDF",
      "Excelexport": "خروجی اکسل",
      "Wordexport": "خروجی کلمه",
      "Csvexport": "خروجی CSV",
      "Search": "جستجو کردن",
      "Columnchooser": "ستون ها",
      "Save": "ذخیره",
      "Item": "مورد",
      "Items": "موارد",
      "EditOperationAlert": "هیچ رکوردی برای عملکرد ویرایش انتخاب نشده است",
      "DeleteOperationAlert": "هیچ رکوردی برای حذف عملیات انتخاب نشده است",
      "SaveButton": "ذخیره",
      "OKButton": "باشه",
      "CancelButton": "لغو",
      "EditFormTitle": "جزئیات",
      "AddFormTitle": "افزودن رکورد سرمایه گذاری",
      "BatchSaveConfirm": "آیا مطمئن هستید که می خواهید تغییرات را ذخیره کنید؟",
      "BatchSaveLostChanges": "تغییرات ذخیره نشده از بین می روند. آیا مطمئن هستید که میخواهید ادامه دهید؟",
      "ConfirmDelete": "آیا مطمئن هستید که می خواهید رکورد را حذف کنید؟",
      "CancelEdit": "آیا مطمئن هستید که می خواهید تغییرات را لغو کنید؟",
      "ChooseColumns": "ستون را انتخاب کنید",
      "SearchColumns": "ستون جستجو",
      "Matchs": "جستجو حاصلی دربرنداشت",
      "FilterButton": "فیلتر",
      "ClearButton": "پاک کردن",
      "StartsWith": "شروع می شود با",
      "EndsWith": "به پایان می رسد با",
      "Contains": "حاوی",
      "Equal": "برابر",
      "NotEqual": "نا برابر",
      "LessThan": "کمتر از",
      "LessThanOrEqual": "کمتر از یکسان یا برابر است",
      "GreaterThan": "بزرگتر از",
      "GreaterThanOrEqual": "بزرگتر یا مساوی",
      "ChooseDate": "تاریخ را انتخاب کنید",
      "EnterValue": "مقدار را وارد کنید",
      "Copy": "کپی 🀄",
      "Group": "گروه توسط این ستون",
      "Ungroup": "گروه بندی شده توسط این ستون",
      "autoFitAll": "همه ستون ها را متناسب کنید",
      "autoFit": "این ستون را متناسب کنید",
      "Export": "خروجی",
      "FirstPage": "صفحه اول",
      "LastPage": "آخرین صفحه",
      "PreviousPage": "صفحه قبلی",
      "NextPage": "صفحه بعد",
      "SortAscending": "صعودی مرتب سازی",
      "SortDescending": "مرتب سازی نزولی",
      "EditRecord": "رکورد را ویرایش کنید",
      "DeleteRecord": "رکورد را حذف کنید",
      "FilterMenu": "فیلتر",
      "SelectAll": "انتخاب همه",
      "Blanks": "جای خالی",
      "FilterTrue": "درست است، واقعی",
      "FilterFalse": "غلط",
      "NoResult": "جستجو حاصلی دربرنداشت",
      "ClearFilter": "فیلتر را پاک کنید",
      "NumberFilter": "شماره فیلترها",
      "TextFilter": "فیلترهای متن",
      "DateFilter": "فیلترهای تاریخ",
      "DateTimeFilter": "فیلترهای DateTime",
      "MatchCase": "مورد مسابقه",
      "Between": "بین",
      "CustomFilter": "فیلتر سفارشی",
      "CustomFilterPlaceHolder": "مقدار را وارد کنید",
      "CustomFilterDatePlaceHolder": "تاریخ را انتخاب کنید",
      "AND": "و",
      "OR": "یا",
      "ShowRowsWhere": "نمایش سطرها در جایی:"
    },
    "pager": {
      "currentPageInfo": 'صفحه {0} از {1} ',
      "totalItemsInfo": "({0} آیتم)",
      "totalItemInfo": "({0} آیتم)",
      "firstPageTooltip": "به صفحه اول بروید",
      "lastPageTooltip": "به صفحه آخر بروید",
      "nextPageTooltip": "به صفحه بعد بروید",
      "previousPageTooltip": "به صفحه قبلی بروید",
      "nextPagerTooltip": "به صفحه بعدی بروید",
      "previousPagerTooltip": "به صفحه پیج قبلی بروید",
      "pagerDropDown": "موارد در هر صفحه",
      "pagerAllDropDown": "موارد",
      "All": "همه"
    },
  }
});

@Component({
  selector: 'app-base-grid',
  templateUrl: './base-grid.component.html',
  styleUrls: ['./base-grid.component.scss']
})
export class BaseGridComponent {
  constructor() {
  }
}
