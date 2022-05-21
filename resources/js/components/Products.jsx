import ReactDOM from 'react-dom/client';
import React, { useState, useEffect, useTransition } from 'react';
import Slider from '@mui/material/Slider';
import Input from '@mui/material/TextField';

function Product(props) {
    return (
        <a href={'/products/' + props.name} className='product'>
            <h2 className='name'>{props.name}</h2>
            <span className='price'>{props.price}€</span>
            <div>
                {
                    props.images.map((item) => 
                        <img key={item.ID} src={'images/' + item.image} alt={props.category} />
                    )
                }
            </div>
        </a>
    );
}

function ProductList({ products }) {
    return (
        <section id='product_list'>
            {
                products.map((product) => 
                    <Product 
                        key={product.ID} 
                        name={product.name} 
                        category={product.category} 
                        material={product.material} 
                        style={product.productstyles} 
                        price={product.price} 
                        images={product.images}
                    />
                )
            }
        </section>
    );
}

function Products(props) {
    const products = JSON.parse(props.data);
    const [isPending, startTransition] = useTransition();
    const [sortTerm, setSortTerm] = useState(2);
    const [category, setCategory] = useState('');
    const [gender, setGender] = useState('');
    const [style, setStyle] = useState('');
    const [material, setMaterial] = useState('');
    const [range, setRange] = useState({min: 0, max: 1000});

    function sortByPrice(data, sortTerm) {
        if (sortTerm == 1) {
            data.sort(function (a, b) {
                return parseFloat(a.price.replace(/[^\.\d]/g, '')) - parseFloat(b.price.replace(/[^\.\d]/g, ''));
            });

            return data;
        }
        else if (sortTerm == 2) {
            data.sort(function (a, b) {
                return parseFloat(b.price.replace(/[^\.\d]/g, '')) - parseFloat(a.price.replace(/[^\.\d]/g, ''));
            });

            return data;
        }
        else {
            return data;
        }
    }

    function filterProducts() {
        return (
            sortByPrice(products
            .filter((product) => product.category.includes(category))
            .filter((product) => product.gender.includes(gender))
            .filter((product) => product.productstyles.find((productstyle) => productstyle.style.includes(style)))
            .filter((product) => product.material.includes(material))
            .filter((product) => product.price <= range.max && product.price >= range.min),
            sortTerm
            )
        );
    }

    let result = filterProducts();

    function updateSortHandler(event) {
        startTransition(() => {
            setSortTerm(event.target.value);
        });
    }

    function updateCategoryHandler(event) {
        startTransition(() => {
            if (event.target.value != category) {
                setCategory(event.target.value);
            }
            else {
                setCategory('');
            }
        });
    }

    function updateGenderHandler(event) {
        startTransition(() => {
            if (event.target.value != gender) {
                setGender(event.target.value);
            }
            else {
                setGender('');
            }
        });
    }

    function updateStyleHandler(event) {
        startTransition(() => {
            if (event.target.value != style) {
                setStyle(event.target.value);
            }
            else {
                setStyle('');
            }
        });
    }

    function updateMaterialHandler(event) {
        startTransition(() => {
            if (event.target.value != material) {
                setMaterial(event.target.value);
            }
            else {
                setMaterial('');
            }
        });
    }

    function updateSliderRangeHandler(event) {
        startTransition(() => {
            setRange({min: event.target.value[0], max: event.target.value[1]});
        });
    }

    function handleMinInputChange(event) {
        startTransition(() => {
            setRange({min: event.target.value === '' ? '' : Number(event.target.value), max: range.max});
        });
    };

    function handleMaxInputChange(event) {
        startTransition(() => {
            setRange({min: range.min, max: event.target.value === '' ? '' : Number(event.target.value)});
        });
    };

    function handleBlur1() {
        if (range.min < 0) {
            setRange({min: 0, max: range.max});
        } else if (range.min > 1000) {
            setRange({min: 1000, max: range.max});
        }
    };

    function handleBlur2() {
        if (range.max < 0) {
            setRange({min: range.min, max: 0});
        } else if (range.max > 1000) {
            setRange({min: range.min, max: 1000});
        }
    };

    useEffect (() => {
        result = filterProducts();
    }, []);

    return (
        <div id='products'>
            <section id='sort'>
                <h1>GEAR</h1>
                <div>
                    <label htmlFor='sort_by_price'>Sort By</label>
                    <select name='sort_by_price' id='sort_by_price' defaultValue='2' onChange={updateSortHandler}>
                        <option value='1'>Lowest Price</option>
                        <option value='2'>Highest Price</option>
                    </select>
                </div>
            </section>
            <section id='categories'>
                <div>
                    {
                        JSON.parse(props.categories).map((item) =>
                            <button key={item.ID} className={category == item.name ? 'active' : ''} value={item.name} onClick={updateCategoryHandler}>{item.name}</button>
                        )
                    }
                </div>
            </section>
            <section id='filters'>
                <div>
                    <h4>GENDER</h4>
                    <button className={gender == '' ? 'active' : ''} value='' onClick={updateGenderHandler}>- Any -</button>
                    <button className={gender == 'men' ? 'active' : ''} value='men' onClick={updateGenderHandler}>Men</button>
                    <button className={gender == 'women' ? 'active' : ''} value='women' onClick={updateGenderHandler}>Women</button>
                </div>
                <div>
                    <h4>RIDE STYLE</h4>
                    <button className={style == '' ? 'active' : ''} value='' onClick={updateStyleHandler}>- Any -</button>
                    {
                        JSON.parse(props.styles).map((item) =>
                            <button key={item.ID} className={style == item.name ? 'active' : ''} value={item.name} onClick={updateStyleHandler}>{item.name}</button>
                        )
                    }
                </div>
                <div>
                    <h4>MATERIAL</h4>
                    <button className={material == '' ? 'active' : ''} value='' onClick={updateMaterialHandler}>- Any -</button>
                    {
                        JSON.parse(props.materials).map((item) =>
                            <button key={item.ID} className={material == item.name ? 'active' : ''} value={item.name} onClick={updateMaterialHandler}>{item.name}</button>
                        )
                    }
                </div>
                <div>
                    <h4>PRICE RANGE</h4>
                    <div id='price_input'>
                        <Input 
                            value={range.min}
                            onChange={handleMinInputChange}
                            onBlur={handleBlur1}
                            variant="standard"
                            inputProps={{
                                step: 10,
                                min: 0,
                                max: 1000,
                                type: 'number',
                                'aria-labelledby': 'input-slider',
                            }}
                            sx={{
                                width: 70
                            }}
                        />
                        <Input 
                            value={range.max}
                            onChange={handleMaxInputChange}
                            onBlur={handleBlur2}
                            variant="standard"
                            inputProps={{
                                step: 10,
                                min: 0,
                                max: 1000,
                                type: 'number',
                                'aria-labelledby': 'input-slider',
                            }}
                            sx={{
                                width: 70
                            }}
                        />
                    </div>
                    <Slider 
                        value={[range.min, range.max]} 
                        min={0} 
                        max={1000} 
                        onChange={updateSliderRangeHandler} 
                        valueLabelDisplay="off" 
                        disableSwap
                    />
                </div>
            </section>

            { isPending && <p>Updating List...</p> }

            <ProductList products={result} />

            <style jsx='true'>{`
                #products {
                    display: grid;
                    grid-template-columns: 1fr 3fr;
                    column-gap: 100px;
                    width: min(90vw, 1200px);
                    margin: 32px auto 0 auto;
                }

                #products section {
                    display: flex;
                }

                #products section h1 {
                    font-family: var(--font-3);
                    font-size: 2em;
                    font-weight: 700;
                }

                #products section h2 {
                    font-family: var(--font-2);
                    font-size: 2.5em;
                    font-weight: 700;
                    line-height: .87em;
                }

                #products section h4 {
                    font-family: var(--font-3);
                    font-size: .94em;
                    font-weight: 700;
                }

                #products section span {
                    font-family: var(--font-2);
                    font-size: 1em;
                    font-weight: 300;
                    line-height: 2em;
                }

                #products section button {
                    font-family: var(--font-3);
                    background-color: transparent;
                    border: none;
                    cursor: pointer;
                    transition: color .3s linear;
                }

                #products section button:focus {
                    outline: none;
                }

                #products section button:hover {
                    color: var(--color-blue);
                }

                #products section button.active {
                    color: var(--color-blue);
                }

                #products section#sort {
                    grid-column-start: 1;
                    grid-column-end: 3;
                    align-items: center;
                    justify-content: space-between;
                }

                #products section#sort div label {
                    margin: 0 16px 0 0;
                    font-family: var(--font-3);
                }

                #products section#sort div select {
                    width: 128px;
                    height: 32px;
                    font-family: var(--font-3);
                    border-radius: 0;
                }

                #products section#sort div select:focus {
                    outline: none;
                }

                #products section#categories {
                    grid-column-start: 1;
                    grid-column-end: 3;
                    margin: 0 0 27px 0;
                }

                #products section#categories div button {
                    margin: 10px 20px 10px 0;
                    font-size: 1em;
                    font-weight: 700;
                }

                #products section#filters {
                    grid-column-start: 1;
                    grid-column-end: 2;
                    flex-direction: column;
                }

                #products section#filters div {
                    display: flex;
                    flex-direction: column;
                }

                #products section#filters div h4 {
                    margin: 25px 0 9px 0;
                }

                #products section#filters div button {
                    width: fit-content;
                    padding: 0;
                    line-height: 1.6em;
                    font-size: .8em;
                    font-weight: 300;
                    text-align: left;
                }

                #products section#filters div #price_input {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                }

                #products section#filters div #price_input input {
                    padding: 0;
                    font-size: .8em;
                }

                #products section#product_list {
                    grid-column-start: 2;
                    grid-column-end: 3;
                    display: flex;
                    flex-direction: column;
                }

                #products section#product_list a.product {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin: 0 0 81px 0;
                    color: black;
                    text-decoration: none;
                    transition: color .3s ease-in;
                }

                #products section#product_list a.product:hover {
                    color: var(--color-blue);
                }

                #products section#product_list a.product div {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: wrap;
                    justify-content: center;
                }

                #products section#product_list a.product div img {
                    width: 260px;
                    height: 260px;
                }
            `}</style>
        </div>
    );
}

if (document.getElementById('products')) {
    const element = document.getElementById('products');
    const props = Object.assign({}, element.dataset);
    ReactDOM.createRoot(element).render(<Products {...props}/>);
}
