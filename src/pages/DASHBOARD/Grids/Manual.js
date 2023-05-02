import React, { useState } from "react";
import classes from "./Grid.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Tab from "./Tab";
import Form from "react-bootstrap/Form";
import { FiClipboard } from "react-icons/fi";

function Manual() {
	const [Preference, setPreference] = useState("");
	const [leverage, setLeverage] = useState("");
	const [investAmount, setInvestAmount] = useState("");
	const [Upper, setUpper] = useState("");
	const [Lower, setLower] = useState("");
	const [Grids, setGrids] = useState("");

	const [radio, setRadio] = useState("");
	const [radio2, setRadio2] = useState("");
	const text1 = "16dFcd4migQWoP4vwykApVg5EsCGYNd5G1";

	return (
		<div className={classes.card}>
			<Tab />

			<Row className={classes.css_pref2}>
				<div className={classes.css_pref}>
					<select
						className={classes.select}
						value={Preference}
						onChange={(e) => setPreference(e.target.value)}
					>
						<option value='bnb' className='option'>
							Cross
						</option>
						<option value='btc' className='option'>
							Isolated
						</option>
					</select>
				</div>

				<div>
					<select
						className={classes.select}
						value={leverage}
						onChange={(e) => setLeverage(e.target.value)}
					>
						<option value='10X' className='option'>
							10X
						</option>
						<option value='20X' className='option'>
							20X
						</option>
						<option value='30X' className='option'>
							30X
						</option>
						<option value='40X' className='option'>
							40X
						</option>
						<option value='50X' className='option'>
							50X
						</option>
					</select>
				</div>
			</Row>

			<Row className={classes.radios}>
				<div className={classes.radio_holder}>
					<input
						className={classes.radio}
						type='radio'
						value={radio}
						onChange={(e) => setRadio(e.target.value)}
						name={radio}
					/>{" "}
					Arithmetic
					<input
						className={classes.radio}
						type='radio'
						value={radio2}
						onChange={(e) => setRadio2(e.target.value)}
						name={radio2}
					/>{" "}
					Geometric
				</div>
			</Row>

			<Row>
				<div className={classes.lower}>
					<input
						type='text'
						value={Lower}
						name={Lower}
						placeholder='Lower price'
						onChange={(e) => setLower(e.target.value)}
					/>
					<span />
					<input
						type='text'
						value={Upper}
						name={Upper}
						placeholder='Upper price'
						onChange={(e) => setUpper(e.target.value)}
					/>
				</div>
			</Row>

			<Row>
				<div className={classes.lower2}>
					<input
						type='text'
						value={Grids}
						name={Grids}
						placeholder='Grids'
						onChange={(e) => setGrids(e.target.value)}
					/>
				</div>
			</Row>

			<Container className={classes.css_formcont}>
				<div className={classes.css_1ye}>
					<div className={classes.css_formcontainer}>
						<Row className={classes.css_r8}>
							<div className={classes.grid_profit_value_container}>
								<div className={classes.css_75}>
									<div className={classes.css_bas}>
										<span>Profit/Grid (fees deducted)</span>
									</div>
									<div className={classes.grid_profit_value}>
										{" "}
										0.53% - 0.75%
									</div>
								</div>
							</div>
						</Row>

						<Row className={classes.invest_coin}>
							<div className={classes.invest_coins}>
								<p>Trade key</p>
							</div>
						</Row>

						<Row className={classes.row_bal}>
							<div className={classes.balance}>
								<p>
									<em>Copy autogenerated trade order key below</em>
								</p>
							</div>
						</Row>

						<Row>
							<div className={classes.clip}>
								<Form.Control
									className={classes.input}
									type='text'
									placeholder='16dFcd4migQWoP4vwykApVg5EsCGYNd5G1'
									aria-label='Disabled input example'
									readOnly
								/>

								<button
									onClick={() => {
										navigator.clipboard.writeText(text1);
									}}
								>
									<FiClipboard />
								</button>
							</div>
						</Row>
						<Row></Row>

						<Row>
							<div className={classes.footer}>
								<button type='submit'>Place Order</button>
							</div>
						</Row>
					</div>
				</div>
			</Container>
		</div>
	);
}

export default Manual;
