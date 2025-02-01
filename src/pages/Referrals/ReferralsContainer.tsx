import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Referrals } from "./Referrals";
import { useAuth } from "@/contexts/auth.hook";
import { fetchUserReferrals } from "@/redux/slices/users";
import { fetchUserClicks } from "@/redux/slices/users";

export const ReferralsContainer = () => {
	const { user } = useAuth();
	const { user: userState, click } = useAppSelector(state => state.user)
	const dispatch = useAppDispatch();
	const [referralLink, setReferralLink] = useState<string>('');

	useEffect(() => {
		if (user) {
			dispatch(fetchUserReferrals())
			dispatch(fetchUserClicks())
		}
	}, [user])
	useEffect(() => {
		if (user) {
			const fund = user.fund;
			if (fund) {
				setReferralLink(`${import.meta.env.VITE_CLIENT_APP_URL}/signup?ref=${fund.referralCode}`);
			}
		}
	}, [user]);
	return <Referrals referralLink={referralLink} referrals={userState?.referrals ?? []} notifications={userState?.notifications ?? []} click={click} />
}