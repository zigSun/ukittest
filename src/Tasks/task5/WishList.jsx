import React, { Component } from 'react';
import uuid from 'uuid';
import WishItem from './WishItem';
import './style.scss';

class WishList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wishById: {
                'first_wish': {
                    text: "TDD",
                    isDone: false
                },
                'second_wish': {
                    text: 'Vue',
                    isDone: false
                },
                'third_wish': {
                    text: 'ololo',
                    isDone: false
                }

            },
            wishesId: ['first_wish', 'second_wish', 'third_wish'],
            newWishText: "",
        }
        this.addWish = this.addWish.bind(this);
        this.deleteWish = this.deleteWish.bind(this);
        this.wishDone = this.wishDone.bind(this);
        this.textChange = this.textChange.bind(this);

    }
    addWish() {
        const { wishById, wishesId, newWishText } = this.state;
        if (newWishText !== "") {
            let newWish = {
                text: newWishText,
                isDone: false
            };

            let newWishID = uuid.v4();

            this.setState({
                wishById: Object.assign({}, wishById, { [newWishID]: newWish }),
                wishesId: [...wishesId, newWishID],
                newWishText: ""
            });
        }
    }

    deleteWish(id) {
        let { [id]: omit, ...rest } = this.state.wishById;
        this.setState({
            wishesId: this.state.wishesId.filter(ID => ID !== id),
            wishById: rest,
        })
    }

    wishDone(id) {
        let wishes = { ...this.state.wishById };
        wishes[id].isDone = true;
        this.setState({
            wishById: wishes
        });
    }

    textChange(value) {
        console.log(value);
        this.setState({
            newWishText: value
        })
    }
    render() {
        const { wishById, wishesId, newWishText } = this.state;
        return (
            <React.Fragment>
                <div className="wish-list">
                    <input type="text" value={newWishText} onChange={e => this.textChange(e.target.value)} />
                    <button onClick={this.addWish}>Добавить желание</button>
                    {
                        wishesId.map((id, index) =>
                            <WishItem
                                key={index}
                                id={id}
                                text={wishById[id].text}
                                isDone={wishById[id].isDone}
                                wishDone={this.wishDone}
                                deleteWish={this.deleteWish} />

                        )
                    }
                </div>
            </React.Fragment>
        )
    }
};

export default WishList;