export interface UserRespone {
	full_name: string;
	family: string;
	is_active: number;
	city_name: string;
	email: string;
	national_id: string;
	role_perms: string[];
	setting: SettingResponse;
	username: string;

}

export interface SettingResponse {
	currency: {
		abbr: string;
		sign: string;
		title: string;
		title_en: string;
	};
	currency_title: string;
	site_title: string;
	language: string;
	datatable_rows_per_page: string;
	default_dashboard: string;
}
