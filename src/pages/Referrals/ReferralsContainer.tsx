import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Referrals } from "./Referrals";
import { useAuth } from "@/contexts/auth.hook";

export const ReferralsContainer = () => {
	const { user, logout } = useAuth();
	const dispatch = useAppDispatch();
	const [referralLink, setReferralLink] = useState<string>('');

	useEffect(() => {
		if (user) {
			const fund = user.fund;
			if (fund) {
				setReferralLink(`${import.meta.env.VITE_CLIENT_APP_URL}/signup?ref=${fund.referralCode}`);
			}
		}
	}, [user]);
	console.log(user)
	return <Referrals referralLink={referralLink} />
}