export const Header = ({ money, total }) => {


    return (
        <div className="header">
            <>
                {total > 0 && money - total !== 0 && (
                    <div className="header">Balance Remaining : <span>$ {money - total}</span></div>
                )}
                {total === 0 && (
                    <div className="header">Balance Remaining : <span>$ {money}</span></div>
                )}
                {money - total === 0 && (
                    <div className="header empty">Balance Finished!</div>
                )}

                <style jsx> {
                `
                .header {
                position: sticky;
                top: 0;
                background: linear-gradient(to bottom, #ffc107, #dc3545);
                height: 60px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #fff;
                font-size: 20px;
                letter-spacing: 1px;
                z-index:101;
              }
              .header.empty {
                background: linear-gradient(to bottom, #ffc107, #dc3545);
                color:black;
              }
              .header span {
                margin: 0 10px;
                font-weight: bold;
              }
                `
                }</style>
            </>
        </div>
    )
}
