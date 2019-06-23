//
//  MakeRootViewController.m
//  myRN
//
//  Created by 柏永东 on 2019/6/23.
//  Copyright © 2019 smile. All rights reserved.
//

#import "MakeRootViewController.h"
#import <React/RCTRootView.h>

@implementation MakeRootViewController
+(UIViewController*)makeRootViewController{
    NSURL *jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.bundle?platform=ios"];
    
    RCTRootView *rootView =
    [[RCTRootView alloc] initWithBundleURL: jsCodeLocation
                                moduleName: @"MyApp"
                         initialProperties:nil
                             launchOptions: nil];
    UIViewController *vc = [[UIViewController alloc] init];
    vc.view = rootView;
    return vc;
}
@end
