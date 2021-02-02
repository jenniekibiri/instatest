import React, { Component } from 'react';

export class ChatWindow extends Component {
  render() {
    return (
      <div className="card position-relative">
        <div className="card-header" style={{ backgroundColor: '#E8F5F9' }}>
          <div className="d-flex justify-content-between align-items-center">
            <div
              className="text-center"
              style={{ position: 'absolute', top: '-40px' }}
            >
              <img
                src="https://i.pravatar.cc/150?img=60"
                className="rounded-circle"
                width="64"
                alt="..."
              />
              <p className="m-0 font-weight-bold" style={{ fontSize: '10px' }}>
                Shirly Cook
              </p>
              <p className="text-muted m-0" style={{ fontSize: '10px' }}>
                @JohntheD
              </p>
            </div>
            <div></div>
            <h5>Inquiry about relocation</h5>
            <div>
              <button className="btn btn-secondary btn-outline-warning text-white">
                <span className="text-warning font-weight-bold font-italic pr-1">
                  i
                </span>
                Contact Info
              </button>
              <i className="fa fa-ellipsis-v"></i>
            </div>
          </div>
        </div>
        <div className="clearfix">
          <div className="float-right">
            <p
              className="container px-4"
              style={{ backgroundColor: '#EFEBEB' }}
            >
              Chat ID:{' '}
              <span className="text-dark font-weight-bold">3362Gd2</span>
            </p>
          </div>
        </div>
        <div className="card-body">
          <div className="card w-75">
            <div className="card-body" style={{ backgroundColor: '#E8F5F9' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
          <p className="text-muted mt-2">11:00 a.m.</p>
          <div className="card w-75 float-right">
            <div className="card-body" style={{ backgroundColor: '#FCF2F7' }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec
              nam aliquam sem et tortor consequat id porta nibh.
            </div>
          </div>
          <div className="clearfix"></div>
          <p className="text-muted mt-2 float-right">
            11:00 a.m. <i className="fa fa-check-double text-warning pl-3"></i>
          </p>
        </div>
        <div className="card-body">
          <div className="card w-25">
            <div className="card-body" style={{ backgroundColor: '#E8F5F9' }}>
              Lorem ipsum dolor
            </div>
          </div>
          <p className="text-muted mt-2">11:00 a.m.</p>
          <div className="card w-50 float-right">
            <div className="d-flex align-items-center">
              <div className="card-body" style={{ backgroundColor: '#FCF2F7' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec
                nam aliquam sem et tortor consequat id porta nibh.
              </div>
              <i className="fa fa-trash-alt"></i>
            </div>
          </div>
          <div className="clearfix"></div>
          <p className="text-muted mt-2 float-right">
            11:40 a.m. <i className="fa fa-check-double text-muted pl-3"></i>
          </p>
          <div className="clearfix"></div>
          <div className="card float-right">
            <div className="card-body" style={{ backgroundColor: '#FCF2F7' }}>
              Lorem ipsum dolor
            </div>
          </div>
          <div className="clearfix"></div>
          <p className="text-muted mt-2 float-right">
            12:50 p.m. <i className="fa fa-check text-muted pl-3"></i>
          </p>
          <div className="clearfix"></div>
        </div>
        <div className="card-body">
          <div className="card border-warning">
            <div className="card-body">
              <p>Type your message</p>
            </div>
            <div className="card-footer">
              <div className="d-flex justify-content-between">
                <div>
                  <i className="fa fa-paperclip"></i>
                  <i className="fa fa-smile"></i>
                  <i className="fa fa-microphone"></i>
                </div>
                <div>
                  <button className="btn btn-warning btn-lg">
                    <i className="fa fa-paper-plane"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChatWindow;