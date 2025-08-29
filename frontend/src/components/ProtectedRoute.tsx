// React Router'dan Navigate componentini import ediyoruz.
// Eğer kullanıcı yetkisizse login sayfasına yönlendirmek için kullanacağız.
import { Navigate } from "react-router-dom";

// JWT (JSON Web Token) decode etmek için kütüphane.
// Token içindeki exp (expiration) gibi bilgileri çözmek için.
import { jwtDecode } from "jwt-decode";

// Backend API çağrıları için axios instance (önceden tanımlanmış).
import api from "../api.ts";

// Token’ların localStorage’da tutulduğu key isimleri (sabit değişkenler).
import { REFRESH_TOKEN, ACCESS_TOKEN } from "../constants.ts";

// React hook'ları import ediyoruz.
// useState → state yönetimi, useEffect → component mount olduğunda işlem yapmak için.
import { useState, useEffect } from "react";

// ReactNode → React bileşenleri (JSX element, string, number, vs.) tipini ifade eder.
// children prop’unun tipini tanımlamak için lazım.
import type { ReactNode } from "react";

// JWT içindeki payload’un tipini tanımlıyoruz.
// exp → token bitiş süresi (timestamp formatında)
// [key: string]: any → token içinde başka key’ler de olabilir (username, email, vs.)
interface JwtPayload {
	exp: number;
	[key: string]: any;
}

// ProtectedRoute componenti tanımlıyoruz.
// children → içine koyulan diğer component’leri temsil eder.
function ProtectedRoute({ children }: { children: ReactNode }) {
	// isAuthorized → kullanıcı yetkili mi değil mi?
	// Başlangıç değeri null (bilinmiyor), sonradan true/false olacak.
	const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

	// Component ilk çalıştığında (mount olduğunda) auth() fonksiyonunu çağırıyoruz.
	// Eğer hata olursa kullanıcı yetkisiz kabul edilir.
	useEffect(() => {
		auth().catch(() => setIsAuthorized(false));
	}, []);

	// Access token süresi bittiyse refresh token ile yeni access token alıyoruz.
	const refreshToken = async () => {
		const refreshToken = localStorage.getItem(REFRESH_TOKEN);
		try {
			// Refresh endpoint’e istek atıyoruz.
			const res = await api.post("/api/token/refresh/", {
				refresh: refreshToken,
			});

			// Eğer başarılı olursa yeni access token’i localStorage’a kaydediyoruz.
			if (res.status === 200) {
				localStorage.setItem(ACCESS_TOKEN, res.data.access);
				setIsAuthorized(true); // Kullanıcı yetkili
			} else {
				setIsAuthorized(false); // Kullanıcı yetkisiz
			}
		} catch (error) {
			console.log(error);
			setIsAuthorized(false); // Hata durumunda yetkisiz kabul et
		}
	};

	// Kullanıcının token’ını kontrol eden fonksiyon.
	const auth = async () => {
		const token = localStorage.getItem(ACCESS_TOKEN);
		if (!token) {
			// Eğer token yoksa kullanıcı giriş yapmamış demektir.
			setIsAuthorized(false);
			return;
		}

		// JWT token’i decode ediyoruz.
		const decoded = jwtDecode<JwtPayload>(token);

		// Token’ın bitiş zamanı (saniye cinsinden).
		const tokenExpiration = decoded.exp;

		// Şu anki zaman (saniye cinsinden).
		const now = Date.now() / 1000;

		// Eğer token süresi dolmuşsa refresh token almayı dene.
		if (tokenExpiration < now) {
			await refreshToken();
		} else {
			// Token hala geçerliyse kullanıcı yetkili.
			setIsAuthorized(true);
		}
	};

	// Eğer yetki durumu daha belirlenmemişse (ilk yükleme) ekranda "Loading..." göster.
	if (isAuthorized === null) {
		return <div>Loading...</div>;
	}

	// Kullanıcı yetkiliyse children componentlerini göster.
	// Yetkisizse login sayfasına yönlendir.
	return isAuthorized ? children : <Navigate to="/" />;
}

// Componenti dışa aktarıyoruz ki başka dosyalarda kullanılabilsin.
export default ProtectedRoute;
