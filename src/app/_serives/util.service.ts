
import * as moment from "moment";
export class UtilService {

  static jsonToUrlEncode(data) {
    return Object.keys(data).map((key) => {
      return encodeURIComponent(key)
        + '=' + encodeURIComponent(data[key]);
    }).join('&')
  }

  static copyToClipBoard(dataToCopy) {
    document.addEventListener('copy', (e: ClipboardEvent) => {
      e.clipboardData.setData('text/plain', (dataToCopy));
      e.preventDefault();
      document.removeEventListener('copy', null);
    });
    document.execCommand('copy');
  }

  static pdfToHtml() {
    window.print()
  }

  static jsonToArray(json) {
    var result = [];
    for (let i in json) {
      result.push(json[i])
    }
    return result
  }

  prettifyToString(obj: any) {
    return JSON.stringify(obj, null, 4);
  }

  isNumber(obj: any) {
    return isNaN(obj);
  }




  static downLoadCSV(data: any, fileName: string) {

    const blob = new Blob([data], { type: 'text/csv;charset=utf-8;' });

    const link = document.createElement('a');
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', fileName);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }

  static downLoadFile(data: any, type: string, fileName) {
    let blob = new Blob([data], { type: type });
    let url = window.URL.createObjectURL(blob);
    let a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    a.click();
    setTimeout(() => {
      window.URL.revokeObjectURL(url);
    }, 0)
  }

  onlyNumberKey(event) {
    return event.charCode == 8 || event.charCode == 0
      ? null
      : event.charCode >= 48 && event.charCode <= 57;
  }

  withDecimalNumberKey(event) {
    return event.charCode == 8 || event.charCode == 0
      ? null
      : event.charCode >= 48 && event.charCode <= 57 || event.charCode == 46;
  }

}

