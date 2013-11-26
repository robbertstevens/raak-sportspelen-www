/// <reference path="references.ts" />
class RaakStorage{
	static storeItem(key: string, value: string)
	{
		window.localStorage.setItem(key,value);
	}

	static getItem(key: string)
	{
		return window.localStorage.getItem(key);
	}

	static removeItem(key: string)
	{
		window.localStorage.removeItem(key);
	}

	static clearStorage()
	{
		window.localStorage.clear();
	}

	static getKey(n: number)
	{
		window.localStorage.key(n);
	}
}