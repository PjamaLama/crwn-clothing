import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
	HeaderContainer,
	LogoContainer,
	OptionsContainer,
	OptionLink
} from "./header.styles";

import { auth } from "../../firebase/firebase.util";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

const Header = ({ currentUser, hidden }) => (
	<HeaderContainer>
		<LogoContainer to="/">
			<Logo className="logo" />
		</LogoContainer>
		<OptionsContainer>
			<OptionLink to="/shop">Shop</OptionLink>
			<OptionLink to="/shop">Contact</OptionLink>
			{currentUser ? (
				<OptionLink as="div" onClick={() => auth.signOut()}>
					SIGN OUT
				</OptionLink>
			) : (
				<OptionLink to="/signin">SIGN IN</OptionLink>
			)}
			<CartIcon />
		</OptionsContainer>
		{hidden ? null : <CartDropdown />}
	</HeaderContainer>
);
//state is from root.reducer --> user.reducer
const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
