class MTRStorage{
	public storeItem(key: string, value: PlayField): void
	{
		window.localStorage.setItem(key,JSON.stringify(value));
	}

	public getItem(key: string): PlayField
	{
		return <PlayField>JSON.parse(window.localStorage.getItem(key));
	}

	public removeItem(key: string): void
	{
		window.localStorage.removeItem(key);
	}

	public clearStorage(): void
	{
		window.localStorage.clear();
	}

	public getKey(n: number): string
	{
		return window.localStorage.key(n);
	}
}