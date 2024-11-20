export namespace Schemas {
	// <Schemas>
	export type AccountStatus =
		| "ONBOARDING"
		| "SUBMISSION_FAILED"
		| "SUBMITTED"
		| "ACCOUNT_UPDATED"
		| "APPROVAL_PENDING"
		| "ACTIVE"
		| "REJECTED"
	export type Account = {
		id: string
		account_number?: string | undefined
		status: AccountStatus
		currency?: string | undefined
		cash?: string | undefined
		portfolio_value?: string | undefined
		pattern_day_trader?: boolean | undefined
		trade_suspended_by_user?: boolean | undefined
		trading_blocked?: boolean | undefined
		transfers_blocked?: boolean | undefined
		account_blocked?: boolean | undefined
		created_at?: string | undefined
		shorting_enabled?: boolean | undefined
		long_market_value?: string | undefined
		short_market_value?: string | undefined
		equity?: string | undefined
		last_equity?: string | undefined
		multiplier?: string | undefined
		buying_power?: string | undefined
		initial_margin?: string | undefined
		maintenance_margin?: string | undefined
		sma?: string | undefined
		daytrade_count?: number | undefined
		last_maintenance_margin?: string | undefined
		daytrading_buying_power?: string | undefined
		regt_buying_power?: string | undefined
	}
	export type AccountConfigurations = Partial<{
		dtbp_check: "both" | "entry" | "exit"
		trade_confirm_email: string
		suspend_trade: boolean
		no_shorting: boolean
		fractional_trading: boolean
		max_margin_multiplier: string
		pdt_check: string
	}>
	export type ActivityType =
		| "FILL"
		| "TRANS"
		| "MISC"
		| "ACATC"
		| "ACATS"
		| "CSD"
		| "CSW"
		| "DIV"
		| "DIVCGL"
		| "DIVCGS"
		| "DIVFEE"
		| "DIVFT"
		| "DIVNRA"
		| "DIVROC"
		| "DIVTW"
		| "DIVTXEX"
		| "INT"
		| "INTNRA"
		| "INTTW"
		| "JNL"
		| "JNLC"
		| "JNLS"
		| "MA"
		| "NC"
		| "OPASN"
		| "OPEXP"
		| "OPXRC"
		| "PTC"
		| "PTR"
		| "REORG"
		| "SC"
		| "SSO"
		| "SSP"
		| "CFEE"
		| "FEE"
	export type OrderStatus =
		| "new"
		| "partially_filled"
		| "filled"
		| "done_for_day"
		| "canceled"
		| "expired"
		| "replaced"
		| "pending_cancel"
		| "pending_replace"
		| "accepted"
		| "pending_new"
		| "accepted_for_bidding"
		| "stopped"
		| "rejected"
		| "suspended"
		| "calculated"
	export type TradingActivities = Partial<{
		activity_type: ActivityType
		id: string
		cum_qty: string
		leaves_qty: string
		price: string
		qty: string
		side: string
		symbol: string
		transaction_time: string
		order_id: string
		type: "fill" | "partial_fill"
		order_status: OrderStatus
	}>
	export type NonTradeActivities = Partial<{
		activity_type: ActivityType
		id: string
		date: string
		net_amount: string
		symbol: string
		qty: string
		per_share_amount: string
	}>
	export type AssetClass = "us_equity" | "crypto"
	export type OrderClass = "simple" | "bracket" | "oco" | "oto" | ""
	export type OrderType =
		| "market"
		| "limit"
		| "stop"
		| "stop_limit"
		| "trailing_stop"
	export type OrderSide = "buy" | "sell"
	export type TimeInForce = "day" | "gtc" | "opg" | "cls" | "ioc" | "fok"
	export type Order = {
		id?: string | undefined
		client_order_id?: string | undefined
		created_at?: string | undefined
		updated_at?: string | null | undefined
		submitted_at?: string | null | undefined
		filled_at?: string | null | undefined
		expired_at?: string | null | undefined
		canceled_at?: string | null | undefined
		failed_at?: string | null | undefined
		replaced_at?: string | null | undefined
		replaced_by?: string | null | undefined
		replaces?: string | null | undefined
		asset_id?: string | undefined
		symbol: string
		asset_class?: AssetClass | undefined
		notional: string | null
		qty: string | null
		filled_qty?: string | undefined
		filled_avg_price?: string | null | undefined
		order_class?: OrderClass | undefined
		order_type?: string | undefined
		type: OrderType
		side: OrderSide
		time_in_force: TimeInForce
		limit_price?: string | null | undefined
		stop_price?: string | null | undefined
		status?: OrderStatus | undefined
		extended_hours?: boolean | undefined
		legs?: Array<Order> | null | undefined
		trail_percent?: string | undefined
		trail_price?: string | undefined
		hwm?: string | undefined
	}
	export type Exchange =
		| "AMEX"
		| "ARCA"
		| "BATS"
		| "NYSE"
		| "NASDAQ"
		| "NYSEARCA"
		| "OTC"
	export type Assets = {
		id: string
		class: AssetClass
		exchange: Exchange
		symbol: string
		name: string
		status: "active" | "inactive"
		tradable: boolean
		marginable: boolean
		shortable: boolean
		easy_to_borrow: boolean
		fractionable: boolean
	}
	export type Position = {
		asset_id: string
		symbol: string
		exchange: Exchange
		asset_class: AssetClass
		avg_entry_price: string
		qty: string
		qty_available?: string | undefined
		side: string
		market_value: string
		cost_basis: string
		unrealized_pl: string
		unrealized_plpc: string
		unrealized_intraday_pl: string
		unrealized_intraday_plpc: string
		current_price: string
		lastday_price: string
		change_today: string
		asset_marginable: boolean
	}
	export type Watchlist = {
		id: string
		account_id: string
		created_at: string
		updated_at: string
		name: string
		assets?: Array<Assets> | undefined
	}
	export type Calendar = {
		date: string
		open: string
		close: string
		session_open: string
		session_close: string
	}
	export type Clock = Partial<{
		timestamp: string
		is_open: boolean
		next_open: string
		next_close: string
	}>
	export type PortfolioHistory = Partial<{
		timestamp: Array<number>
		equity: Array<number>
		profit_loss: Array<number>
		profit_loss_pct: Array<number>
		base_value: number
		timeframe: string
	}>
	export type CanceledOrderResponse = Partial<{ id: string; status: number }>
	export type PatchOrderRequest = Partial<{
		qty: string
		time_in_force: TimeInForce
		limit_price: string
		stop_price: string
		trail: string
		client_order_id: string
	}>
	export type PositionClosedReponse = {
		symbol: string
		status: string
		body?: Order | undefined
	}
	export type UpdateWatchlistRequest = {
		name: string
		symbols?: Array<string | null> | undefined
	}
	export type AddAssetToWatchlistRequest = Partial<{ symbol: string }>

	// </Schemas>
}

export namespace Endpoints {
	// <Endpoints>

	export type get_GetAccount = {
		method: "GET"
		path: "/v2/account"
		requestFormat: "json"
		parameters: never
		response: Schemas.Account
	}
	export type post_PostOrder = {
		method: "POST"
		path: "/v2/orders"
		requestFormat: "json"
		parameters: {
			body: Schemas.Order
		}
		response: Schemas.Order
	}
	export type get_GetAllOrders = {
		method: "GET"
		path: "/v2/orders"
		requestFormat: "json"
		parameters: {
			query: Partial<{
				status: "open" | "closed" | "all"
				limit: number
				after: string
				until: string
				direction: "asc" | "desc"
				nested: boolean
				symbols: string
			}>
		}
		response: Array<Schemas.Order>
	}
	export type delete_DeleteAllOrders = {
		method: "DELETE"
		path: "/v2/orders"
		requestFormat: "json"
		parameters: never
		response: Array<Schemas.CanceledOrderResponse>
	}
	export type get_GetOrderByOrderID = {
		method: "GET"
		path: "/v2/orders/{order_id}"
		requestFormat: "json"
		parameters: {
			query: Partial<{ nested: boolean }>
			path: { order_id: string }
		}
		response: Schemas.Order
	}
	export type patch_PatchOrderByOrderId = {
		method: "PATCH"
		path: "/v2/orders/{order_id}"
		requestFormat: "json"
		parameters: {
			path: { order_id: string }

			body: Schemas.PatchOrderRequest
		}
		response: Schemas.Order
	}
	export type delete_DeleteOrderByOrderID = {
		method: "DELETE"
		path: "/v2/orders/{order_id}"
		requestFormat: "json"
		parameters: {
			path: { order_id: string }
		}
		response: unknown
	}
	export type get_GetAllOpenPositions = {
		method: "GET"
		path: "/v2/positions"
		requestFormat: "json"
		parameters: never
		response: Array<Schemas.Position>
	}
	export type delete_DeleteAllOpenPositions = {
		method: "DELETE"
		path: "/v2/positions"
		requestFormat: "json"
		parameters: {
			query: Partial<{ cancel_orders: boolean }>
		}
		response: Array<Schemas.PositionClosedReponse>
	}
	export type get_GetOpenPosition = {
		method: "GET"
		path: "/v2/positions/{symbol_or_asset_id}"
		requestFormat: "json"
		parameters: {
			path: { symbol_or_asset_id: string }
		}
		response: Schemas.Position
	}
	export type delete_DeleteOpenPosition = {
		method: "DELETE"
		path: "/v2/positions/{symbol_or_asset_id}"
		requestFormat: "json"
		parameters: {
			query: Partial<{ qty: number; percentage: number }>
			path: { symbol_or_asset_id: string }
		}
		response: Schemas.Order
	}
	export type get_GetAccountPortfolioHistory = {
		method: "GET"
		path: "/v2/account/portfolio/history"
		requestFormat: "json"
		parameters: {
			query: Partial<{
				period: string
				timeframe: string
				date_end: string
				extended_hours: string
			}>
		}
		response: Schemas.PortfolioHistory
	}
	export type get_GetWatchlists = {
		method: "GET"
		path: "/v2/watchlists"
		requestFormat: "json"
		parameters: never
		response: Array<Schemas.Watchlist>
	}
	export type post_PostWatchlist = {
		method: "POST"
		path: "/v2/watchlists"
		requestFormat: "json"
		parameters: {
			body: Schemas.UpdateWatchlistRequest
		}
		response: Schemas.Watchlist
	}
	export type get_GetWatchlistById = {
		method: "GET"
		path: "/v2/watchlists/{watchlist_id}"
		requestFormat: "json"
		parameters: {
			path: { watchlist_id: string }
		}
		response: Schemas.Watchlist
	}
	export type put_UpdateWatchlistById = {
		method: "PUT"
		path: "/v2/watchlists/{watchlist_id}"
		requestFormat: "json"
		parameters: {
			path: { watchlist_id: string }

			body: Schemas.UpdateWatchlistRequest
		}
		response: Schemas.Watchlist
	}
	export type post_AddAssetToWatchlist = {
		method: "POST"
		path: "/v2/watchlists/{watchlist_id}"
		requestFormat: "json"
		parameters: {
			path: { watchlist_id: string }

			body: Schemas.AddAssetToWatchlistRequest
		}
		response: Schemas.Watchlist
	}
	export type delete_DeleteWatchlistById = {
		method: "DELETE"
		path: "/v2/watchlists/{watchlist_id}"
		requestFormat: "json"
		parameters: {
			path: { watchlist_id: string }
		}
		response: unknown
	}
	export type get_GetWatchlistByName = {
		method: "GET"
		path: "/v2/watchlists:by_name"
		requestFormat: "json"
		parameters: {
			query: { name: string }
		}
		response: Schemas.Watchlist
	}
	export type put_UpdateWatchlistByName = {
		method: "PUT"
		path: "/v2/watchlists:by_name"
		requestFormat: "json"
		parameters: {
			query: { name: string }

			body: Schemas.UpdateWatchlistRequest
		}
		response: Schemas.Watchlist
	}
	export type post_AddAssetToWatchlistByName = {
		method: "POST"
		path: "/v2/watchlists:by_name"
		requestFormat: "json"
		parameters: {
			query: { name: string }

			body: Schemas.AddAssetToWatchlistRequest
		}
		response: Schemas.Watchlist
	}
	export type delete_DeleteWatchlistByName = {
		method: "DELETE"
		path: "/v2/watchlists:by_name"
		requestFormat: "json"
		parameters: {
			query: { name: string }
		}
		response: unknown
	}
	export type delete_RemoveAssetFromWatchlist = {
		method: "DELETE"
		path: "/v2/watchlists/{watchlist_id}/{symbol}"
		requestFormat: "json"
		parameters: {
			path: { watchlist_id: string; symbol: string }
		}
		response: Schemas.Watchlist
	}
	export type get_GetAccountConfig = {
		method: "GET"
		path: "/v2/account/configurations"
		requestFormat: "json"
		parameters: never
		response: Schemas.AccountConfigurations
	}
	export type patch_PatchAccountConfig = {
		method: "PATCH"
		path: "/v2/account/configurations"
		requestFormat: "json"
		parameters: {
			body: Schemas.AccountConfigurations
		}
		response: Schemas.AccountConfigurations
	}
	export type get_GetAccountActivities = {
		method: "GET"
		path: "/v2/account/activities"
		requestFormat: "json"
		parameters: {
			query: Partial<{
				date: string
				until: string
				after: string
				direction: "asc" | "desc"
				page_size: number
				page_token: string
				activity_types: string
			}>
		}
		response: Array<
			| Schemas.TradingActivities
			| Schemas.NonTradeActivities
			| Array<Schemas.TradingActivities | Schemas.NonTradeActivities>
		>
	}
	export type get_GetAccountActivitiesByActivityType = {
		method: "GET"
		path: "/v2/account/activities/{activity_type}"
		requestFormat: "json"
		parameters: {
			query: Partial<{
				date: string
				until: string
				after: string
				direction: "asc" | "desc"
				page_size: number
				page_token: string
			}>
			path: { activity_type: string }
		}
		response: Array<Schemas.TradingActivities | Schemas.NonTradeActivities>
	}
	export type get_GetCalendar = {
		method: "GET"
		path: "/v2/calendar"
		requestFormat: "json"
		parameters: {
			query: Partial<{ start: string; end: string }>
		}
		response: Array<Schemas.Calendar>
	}
	export type get_GetClock = {
		method: "GET"
		path: "/v2/clock"
		requestFormat: "json"
		parameters: never
		response: Schemas.Clock
	}

	// </Endpoints>
}

// <EndpointByMethod>
export type EndpointByMethod = {
	get: {
		"/v2/account": Endpoints.get_GetAccount
		"/v2/orders": Endpoints.get_GetAllOrders
		"/v2/orders/{order_id}": Endpoints.get_GetOrderByOrderID
		"/v2/positions": Endpoints.get_GetAllOpenPositions
		"/v2/positions/{symbol_or_asset_id}": Endpoints.get_GetOpenPosition
		"/v2/account/portfolio/history": Endpoints.get_GetAccountPortfolioHistory
		"/v2/watchlists": Endpoints.get_GetWatchlists
		"/v2/watchlists/{watchlist_id}": Endpoints.get_GetWatchlistById
		"/v2/watchlists:by_name": Endpoints.get_GetWatchlistByName
		"/v2/account/configurations": Endpoints.get_GetAccountConfig
		"/v2/account/activities": Endpoints.get_GetAccountActivities
		"/v2/account/activities/{activity_type}": Endpoints.get_GetAccountActivitiesByActivityType
		"/v2/calendar": Endpoints.get_GetCalendar
		"/v2/clock": Endpoints.get_GetClock
	}
	post: {
		"/v2/orders": Endpoints.post_PostOrder
		"/v2/watchlists": Endpoints.post_PostWatchlist
		"/v2/watchlists/{watchlist_id}": Endpoints.post_AddAssetToWatchlist
		"/v2/watchlists:by_name": Endpoints.post_AddAssetToWatchlistByName
	}
	delete: {
		"/v2/orders": Endpoints.delete_DeleteAllOrders
		"/v2/orders/{order_id}": Endpoints.delete_DeleteOrderByOrderID
		"/v2/positions": Endpoints.delete_DeleteAllOpenPositions
		"/v2/positions/{symbol_or_asset_id}": Endpoints.delete_DeleteOpenPosition
		"/v2/watchlists/{watchlist_id}": Endpoints.delete_DeleteWatchlistById
		"/v2/watchlists:by_name": Endpoints.delete_DeleteWatchlistByName
		"/v2/watchlists/{watchlist_id}/{symbol}": Endpoints.delete_RemoveAssetFromWatchlist
	}
	patch: {
		"/v2/orders/{order_id}": Endpoints.patch_PatchOrderByOrderId
		"/v2/account/configurations": Endpoints.patch_PatchAccountConfig
	}
	put: {
		"/v2/watchlists/{watchlist_id}": Endpoints.put_UpdateWatchlistById
		"/v2/watchlists:by_name": Endpoints.put_UpdateWatchlistByName
	}
}

// </EndpointByMethod>

// <EndpointByMethod.Shorthands>
export type GetEndpoints = EndpointByMethod["get"]
export type PostEndpoints = EndpointByMethod["post"]
export type DeleteEndpoints = EndpointByMethod["delete"]
export type PatchEndpoints = EndpointByMethod["patch"]
export type PutEndpoints = EndpointByMethod["put"]
export type AllEndpoints = EndpointByMethod[keyof EndpointByMethod]
// </EndpointByMethod.Shorthands>

// <ApiClientTypes>
export type EndpointParameters = {
	body?: unknown
	query?: Record<string, unknown>
	header?: Record<string, unknown>
	path?: Record<string, unknown>
}

export type MutationMethod = "post" | "put" | "patch" | "delete"
export type Method = "get" | "head" | "options" | MutationMethod

type RequestFormat = "json" | "form-data" | "form-url" | "binary" | "text"

export type DefaultEndpoint = {
	parameters?: EndpointParameters | undefined
	response: unknown
}

export type Endpoint<TConfig extends DefaultEndpoint = DefaultEndpoint> = {
	operationId: string
	method: Method
	path: string
	requestFormat: RequestFormat
	parameters?: TConfig["parameters"]
	meta: {
		alias: string
		hasParameters: boolean
		areParametersRequired: boolean
	}
	response: TConfig["response"]
}

type Fetcher = (
	method: Method,
	url: string,
	parameters?: EndpointParameters | undefined
) => Promise<Endpoint["response"]>

type RequiredKeys<T> = {
	[P in keyof T]-?: undefined extends T[P] ? never : P
}[keyof T]

type MaybeOptionalArg<T> = RequiredKeys<T> extends never
	? [config?: T]
	: [config: T]

// </ApiClientTypes>

// <ApiClient>
export class ApiClient {
	baseUrl = ""

	constructor(public fetcher: Fetcher) {}

	setBaseUrl(baseUrl: string) {
		this.baseUrl = baseUrl
		return this
	}

	// <ApiClient.get>
	get<Path extends keyof GetEndpoints, TEndpoint extends GetEndpoints[Path]>(
		path: Path,
		...params: MaybeOptionalArg<TEndpoint["parameters"]>
	): Promise<TEndpoint["response"]> {
		return this.fetcher("get", this.baseUrl + path, params[0]) as Promise<
			TEndpoint["response"]
		>
	}
	// </ApiClient.get>

	// <ApiClient.post>
	post<Path extends keyof PostEndpoints, TEndpoint extends PostEndpoints[Path]>(
		path: Path,
		...params: MaybeOptionalArg<TEndpoint["parameters"]>
	): Promise<TEndpoint["response"]> {
		return this.fetcher("post", this.baseUrl + path, params[0]) as Promise<
			TEndpoint["response"]
		>
	}
	// </ApiClient.post>

	// <ApiClient.delete>
	delete<
		Path extends keyof DeleteEndpoints,
		TEndpoint extends DeleteEndpoints[Path],
	>(
		path: Path,
		...params: MaybeOptionalArg<TEndpoint["parameters"]>
	): Promise<TEndpoint["response"]> {
		return this.fetcher("delete", this.baseUrl + path, params[0]) as Promise<
			TEndpoint["response"]
		>
	}
	// </ApiClient.delete>

	// <ApiClient.patch>
	patch<
		Path extends keyof PatchEndpoints,
		TEndpoint extends PatchEndpoints[Path],
	>(
		path: Path,
		...params: MaybeOptionalArg<TEndpoint["parameters"]>
	): Promise<TEndpoint["response"]> {
		return this.fetcher("patch", this.baseUrl + path, params[0]) as Promise<
			TEndpoint["response"]
		>
	}
	// </ApiClient.patch>

	// <ApiClient.put>
	put<Path extends keyof PutEndpoints, TEndpoint extends PutEndpoints[Path]>(
		path: Path,
		...params: MaybeOptionalArg<TEndpoint["parameters"]>
	): Promise<TEndpoint["response"]> {
		return this.fetcher("put", this.baseUrl + path, params[0]) as Promise<
			TEndpoint["response"]
		>
	}
	// </ApiClient.put>
}

export function createApiClient(fetcher: Fetcher, baseUrl?: string) {
	return new ApiClient(fetcher).setBaseUrl(baseUrl ?? "")
}

/**
 Example usage:
 const api = createApiClient((method, url, params) =>
   fetch(url, { method, body: JSON.stringify(params) }).then((res) => res.json()),
 );
 api.get("/users").then((users) => console.log(users));
 api.post("/users", { body: { name: "John" } }).then((user) => console.log(user));
 api.put("/users/:id", { path: { id: 1 }, body: { name: "John" } }).then((user) => console.log(user));
*/

// </ApiClient
