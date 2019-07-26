

// import 'rxjs/add/operator/map';
// import { Router } from '@angular/router';
// import { Injectable } from '@angular/core';
// // import { HttpService } from './http.service';
// import { environment } from '../../environments/environment';
// import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
// import { UtilService } from './util.service';
// import 'rxjs/add/operator/catch';


// @Injectable()
// export class DataService {
// 	constructor(
// 		// private httpservice: HttpService,
// 		private httpClient: HttpClient,
// 		private router: Router
// 	) {
// 		this.env = environment;
// 		this.priceManagerPath = this.env.priceManagerBaseUrl;
// 	}
// 	env: any;
// 	priceManagerPath: string;
// 	masterDbPath: string;
// 	serviceCreditPath: string;

// 	saveNewCompany(data: any, headers?: any) {
// 		return this.httpservice
// 			.post(this.priceManagerPath + 'agreement', data, null, headers)
// 			.map((res) => res);
// 	}

// 	saveUpdatedPriceManagerContract(data: any, headers?: any) {
// 		return this.httpservice
// 			.put(this.priceManagerPath + 'agreement', data, null, headers)
// 			.map((res) => res);
// 	}

// 	getSavedContract(id) {
// 		return this.httpservice
// 			.get(this.priceManagerPath + 'agreement/' + id)
// 			.map((res) => res);
// 	}

// 	submitPriceManagerContract(data: any, headers?: any) {
// 		return this.httpservice
// 			.post(this.priceManagerPath + 'agreement/submit', data, null, headers)
// 			.map((res) => res);
// 	}

// 	updatePriceManagerContract(data: any, headers?: any) {
// 		return this.httpservice
// 			.post(this.priceManagerPath + 'agreement/update', data, null, headers)
// 			.map((res) => res);
// 	}

// 	approvePriceManagerContract(data: any, headers?: any) {
// 		return this.httpservice
// 			.post(this.priceManagerPath + 'agreement/approve', data, null, headers)
// 			.map((res) => res);
// 	}

// 	approveServiceCreditContract(data: any, headers?: any) {
// 		return this.httpservice
// 			.post(this.serviceCreditPath + 'agreement/approve', data, null, headers)
// 			.map((res) => res);
// 	}


// 	getDetailFromContract(id: any, headers?: any) {
// 		return this.httpservice
// 			.get(this.priceManagerPath + 'agreement/' + id, null, headers)
// 			.map((res) => res);
// 	}

// 	getHistoryFromContractId(id: any, headers?: any) {
// 		return this.httpservice
// 			.get(this.priceManagerPath + 'agreement/chain/' + id, null, headers)
// 			.map((res) => res);
// 	}

//     getHistoryFromReportId(id: any, headers?: any) {
//         return this.httpservice
//             .get(this.serviceCreditPath + 'report/chain/' + id, null, headers)
//             .map((res) => res);
//     }

// 	getHistoryStatusFromContractId(id: any, headers?: any) {
// 		return this.httpservice
// 			.get(this.priceManagerPath + 'agreement/chain/status/' + id, null, headers)
// 			.map((res) => res);
// 	}

// 	createPdfDocument(data) {
// 		return this.httpservice.downloadPost(this.serviceCreditPath + 'agreement/generate-agreement', data,null)
// 			.subscribe(response => {
// 				UtilService.downLoadFile(response, "application/pdf", `${new Date().getTime()}.pdf`)
// 			});
// 	}


// }